import { createSignal, For, Show } from 'solid-js'

const predefinedSites = ['greenhouse.io', 'remotive.com', 'wellfound.com', 'simplify.jobs']

export const JobSearch = () => {
  const [selectedSites, setSelectedSites] = createSignal<string[]>([])
  const [customSite, setCustomSite] = createSignal('')
  const [role, setRole] = createSignal('')
  const [showCustomInput, setShowCustomInput] = createSignal(false)
  const [useDateFilter, setUseDateFilter] = createSignal(false)
  const [dateFilter, setDateFilter] = createSignal('')
  const [dateValue, setDateValue] = createSignal('')

  const handleSiteChange = (site: string) => {
    setSelectedSites((prev) => {
      if (prev.includes(site)) {
        return prev.filter((s) => s !== site)
      } else {
        return [...prev, site]
      }
    })
  }

  const handleCustomSiteChange = (e: Event) => {
    setCustomSite((e.target as HTMLInputElement).value)
  }

  const handleAddCustomSite = () => {
    if (customSite() && !selectedSites().includes(customSite())) {
      setSelectedSites((prev) => [...prev, customSite()])
      setCustomSite('')
    }
  }

  const handleRemoveCustomSite = (site: string) => {
    setSelectedSites((prev) => prev.filter((s) => s !== site))
  }

  const openSiteUrl = (site: string) => {
    window.open(`https://${site}`, '_blank')
  }

  const generateSearchUrl = () => {
    const sitesQuery = selectedSites()
      .map((site) => `site:${site}`)
      .join(' | ')
    let dateQuery = ''
    if (useDateFilter() && dateFilter() && dateValue()) {
      dateQuery = `${dateFilter()}:${dateValue()}`
    }
    const query = `${sitesQuery} ${dateQuery} ${role()}`
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const url = generateSearchUrl()
    window.open(url, '_blank')
  }

  return (
    <div class='mx-auto max-w-md rounded bg-white/80 p-4 shadow'>
      <form onSubmit={handleSubmit}>
        <div class='mb-4 text-jefferson-dark'>
          <label class='block text-lg font-medium text-gray-700'>Select Sites</label>
          <div class='mt-2'>
            <For each={predefinedSites}>
              {(site) => (
                <div class='mb-2 flex items-center'>
                  <input
                    type='checkbox'
                    id={site}
                    checked={selectedSites().includes(site)}
                    onChange={() => handleSiteChange(site)}
                    class='mr-2 accent-jefferson-main'
                  />
                  <label for={site} class='text-md'>
                    <span class='inline-flex cursor-pointer items-center'>
                      <span class='hover:text-jefferson-maindark hover:underline hover:underline-offset-4 hover:duration-300'>
                        {site}
                      </span>
                      <svg
                        class='ml-1 mt-1.5 h-4 w-4 cursor-pointer hover:rounded-xl hover:bg-jefferson-light hover:duration-300'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        onClick={() => openSiteUrl(site)}
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0' />

                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />

                        <g id='SVGRepo_iconCarrier'>
                          {' '}
                          <path
                            d='M7 17L17 7M17 7H8M17 7V16'
                            stroke='#0f5f70'
                            stroke-width='1.488'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />{' '}
                        </g>
                      </svg>
                    </span>
                  </label>
                </div>
              )}
            </For>
            <div class='mb-2 flex items-center'>
              <input
                type='checkbox'
                id='custom'
                checked={showCustomInput()}
                onChange={() => setShowCustomInput(!showCustomInput())}
                class='mr-2 accent-jefferson-main'
              />
              <label
                for='custom'
                class='text-md cursor-pointer hover:text-jefferson-maindark hover:underline hover:underline-offset-4 hover:duration-300'
              >
                Other (specify below)
              </label>
            </div>
            <Show when={showCustomInput()}>
              <div class='mt-2 flex items-center'>
                <input
                  type='text'
                  value={customSite()}
                  onInput={handleCustomSiteChange}
                  class='mr-2 flex-1 rounded border p-2'
                  placeholder='Add other site'
                />
                <button
                  type='button'
                  onClick={handleAddCustomSite}
                  class='rounded bg-jefferson-main p-2 text-white'
                >
                  Add
                </button>
              </div>
            </Show>
            <div class='mt-4'>
              <For each={selectedSites()}>
                {(site) => (
                  <div class='mb-2 flex items-center justify-between'>
                    <span class='flex-1'>{site}</span>
                    <button
                      type='button'
                      onClick={() => handleRemoveCustomSite(site)}
                      class='text-red-500'
                    >
                      Remove
                    </button>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
        <div class='mb-4 text-jefferson-dark'>
          <label for='role' class='block text-lg font-medium text-gray-700'>
            Role
          </label>
          <input
            type='text'
            id='role'
            value={role()}
            onInput={(e) => setRole(e.currentTarget.value)}
            class='mt-1 block w-full rounded border p-2'
            placeholder='e.g., software engineer intern, front end developer, etc'
            required
          />
        </div>
        <div class='mb-4'>
          <label class='block text-lg font-medium text-gray-700'>Date Filter (optional)</label>
          <input
            type='checkbox'
            id='useDateFilter'
            checked={useDateFilter()}
            onChange={() => setUseDateFilter(!useDateFilter())}
            class='mt-1 accent-jefferson-main'
          />
        </div>
        <Show when={useDateFilter()}>
          <div class='mb-4 text-jefferson-dark'>
            <label for='dateFilter' class='block text-lg font-medium text-gray-700'>
              Date Filter
            </label>
            <select
              id='dateFilter'
              value={dateFilter()}
              onChange={(e) => setDateFilter(e.currentTarget.value)}
              class='text-md mt-1 block w-full rounded border p-2'
            >
              <option value=''>None</option>
              <option value='before'>Before</option>
              <option value='after'>After</option>
              <option value='daterange'>Date Range</option>
              <option value='year'>Year</option>
            </select>
          </div>
          <div class='mb-4 text-jefferson-dark'>
            <label for='dateValue' class='block text-lg font-medium text-gray-700'>
              {dateFilter() === 'daterange'
                ? 'Date Range (YYYY-MM-DD to YYYY-MM-DD)'
                : 'Date (YYYY-MM-DD or Year)'}
            </label>
            <input
              type='text'
              id='dateValue'
              value={dateValue()}
              onInput={(e) => setDateValue(e.currentTarget.value)}
              class='mt-1 block w-full rounded border p-2'
              placeholder={
                dateFilter() === 'daterange' ? 'YYYY-MM-DD to YYYY-MM-DD' : 'YYYY-MM-DD or Year'
              }
            />
          </div>
        </Show>
        <button type='submit' class='w-full rounded bg-jefferson-main p-2 text-white'>
          Search Jobs
        </button>
      </form>
    </div>
  )
}
