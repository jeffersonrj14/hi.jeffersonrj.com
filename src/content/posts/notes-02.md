---
title: 'Personal Notes 02: Markdown Cheat Sheet'
publishedAt: 2024-11-19
description: ''
slug: 'personal-notes-02'
isPublish: true
---

# How to write in Markdown

<h2>What is Markdown?</h2>
<ol style="list-style-type: lower-latin;">
    <li>
        Markdown is a ightweight markup language that is used to format plain text documents.
    </li>
    <li>
        With the goal of providing a simple and human-readable way to format text that can be easily converted to HTML and other formats. Markdown is often used for writing documentation, readme files, and formatting text on the web.
    </li>
</ol>


<h2>Table of Content</h2>
<ol style="list-style-type: decimal-leading-zero;">
    <li><a href="#headings">Headings</a></li>
    <li><a href="#text-style">Text Style</a></li>
    <li><a href="#lists">Lists</a></li>
    <li><a href="#nested-lists">Nested Lists</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#relative-links-and-images">Relative Links and Images</a></li>
    <li><a href="#code-and-syntax-highlighting">Code and Syntax Highlighting</a></li>
    <li><a href="#blockquotes">Blockquotes</a></li>
    <li><a href="#footnotes">Footnotes</a></li>
    <li><a href="#tables">Tables</a></li>
    <li><a href="#inline-html">Inline HTML</a></li>
    <li><a href="#horizontal-rule">Horizontal Rule</a></li>
    <li><a href="#line-breaks">Line Breaks</a></li>
    <li><a href="#embed-videos">Embed Videos</a></li>
</ol>
    <h2>Playing around with markdown and html elements Reference</h2>
<ol style="list-style-type: decimal-leading-zero;">
    <li><a href="#drop-down-using-details-tag">Drop Down using Details Tag</a></li>
    <li><a href="#custom-badge">Custom Badge</a></li>

</ol>


<h2 id="headings">Headings</h2>
<p>You can create headings by using the "#" symbol, with one "#" for the highest level heading and up to six "#" symbols for lower-level headings.</p>

```markdown
    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
```
# H1
## H2
### H3
#### H4
##### H5
###### H6

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Text Style</h2>

```markdown
    Italics → _underscore_ or *Asterisk*
    Bold → __underscores__ or **Asterisk**
    Italics → and Bold **_Asterisk&Underscores_** | **Asterisk _Underscores_**
    Strikethrough → ~~Scratch this.~~
    Subscript → <sub>Subscript</sub>
    Superscript → <sup>Superscript</sup>
```
Italics → _underscore_ or *Asterisk*<br>
Bold → __underscores__ or **Asterisk**<br>
Italics and Bold → **_Asterisk&Underscores_** | **Asterisk _Underscores_**<br>
Strikethrough → ~~Scratch this.~~<br>
Subscript → <sub>Subscript</sub><br>
Superscript → <sup>Superscript</sup>

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Lists</h2>

Unordered List with  `-` , `*`, or `+`.

```markdown
- John Smith
* Johan
+ Jefferson
```
- John Smith
* Johan
+ Jefferson

Ordered List with Numbers

```markdown
1. John Smith
1. Johan
1. Jefferson
```
1. John Smith
1. Johan
1. Jefferson

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Nested Lists</h2>

You can create a nested list by indenting one or more list items below another item.

```markdown
1. First List
  - First nested list [Press Space two times]
    - Second nested list [Press space four times]
```
1. First List
  - First nested list [Press Space two times]
    - Second nested list [Press space four times]

If you want to add a nested list under list number, for example, `200. List`, you will need to use 4 spaces. So, for the nested list, it needs minimum of 5 spaces to create it.
```markdown
200. List
     - asd
```
200. List
     - five [5 spaces]
       - seven [7 spaces]

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Links</h2>

```markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[I'm a relative reference to other repository file](/../../../../(github-username)/(repositoryname)/blob/main/(file))

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[I'm a relative reference to other repository file](/../../../../jeffersonfed/jeffersonfed/blob/main/README.md)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2 id="relative-links">Relative Links and Images</h2>
You can define relative links and image paths in your rendered files to help readers navigate to other files in your repository.

Inline-style: 

```md
[alt-text](directory file / links)
EX:
    [Example 1](README.md)
    ![Example 2 Image](https://assets.jeffersonrj.com/assets/pokemon/pikachu.png)
```
[Example 1](README.md)

![Example 2 Image](https://assets.jeffersonrj.com/assets/pokemon/pikachu.png)

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Code and Syntax Highlighting</h2>
Code blocks are part of the Markdown, but syntax highlighting isn't.

```markdown
Inline `code` has `back-ticks around` it.
```
Inline `code` has `back-ticks around` it. 

<hr>
Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

<pre>
```js
var x = "jeffersonfed";
alert(x);
```
 
```python
x = "jeffersonfed"
print x
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
</pre>

```js
var x = "jeffersonfed";
alert(x);
```
 
```python
x = "jeffersonfed"
print x
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```


<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Blockquotes</h2>

You can quote text with `>`

```markdown
> This is quote text

> First Line
> Second Line
```
> This is quote text

> First Line
> Second Line

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Footnotes</h2>

```markdown
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.


<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2>Tables</h2>

```markdown
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2 id="inline-html">Inline HTML</h2>

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2 id="horizontal-rule">Horizontal Rule</h2>

```markdown
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2 id="line-breaks">Line Breaks</h2>

```markdown
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>

<h2 id="embed">Embed Videos</h2>
They can't be added directly but you can add an image with a link to the video like this:

```markdown
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```
or in markdown
```markdown
[![alt-text](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

<h2 align = "center";>
	
![<hr />](https://capsule-render.vercel.app/api?type=rect&color=gradient&height=8)<br />

Playing around with markdown and html elements Reference
</h2>


<h2 id="drop-down">Drop down using Details Tag</h2>

<details>
<summary>
<b>Frameworks, Platforms and Libraries</b>
</summary>
<br />

| | | | | |
| - | - | - | - | - |
| Alpine.js     | [ ![Alpine JS][alpinejs-badge] ][alpinejs-link] | |  Astro  | [ ![Astro][astro-badge] ][astro-link] 
| Bootstrap | [ ![Bootstrap][bootstrap-badge] ][bootstrap-link] | | Font Awesome     | [ ![Font Awesome][fontawesome-badge] ][fontawesome-link] |
| Github Pages     | [ ![Github Pages][githubpages-badge] ][githubpages-link] | | Jekyll | [ ![Jekyll][jekyll-badge] ][jekyll-link] |
| JQuery | [ ![JQuery][jquery-badge] ][jquery-link] | | Next.js | [ ![NextJS][nextjs-badge] ][nextjs-link] |
| Node.js | [ ![NodeJS][nodejs-badge] ][nodejs-link] | | NPM | [ ![NPM][npm-badge] ][npm-link] |
| PNPM | [ ![PNPM][pnpm-badge] ][pnpm-link] | | React.js | [ ![React][react-badge] ][react-link] |
| React Router | [ ![React Router][reactrouter-badge] ][reactrouter-link] | | Redux | [ ![Redux][redux-badge] ][redux-link] |
| SASS | [ ![SASS][sass-badge] ][sass-link] | | Tailwind CSS | [ ![Tailwind][tailwind-badge] ][tailwind-link] |
| Vite | [ ![Vite][vite-badge] ][vite-link] | | Vue.js | [ ![Vue][vue-badge] ][vue-link] |
| Yarn | [ ![Yarn][yarn-badge] ][yarn-link] |
</details>

<details>
<summary>
<b>Example 2</b>
</summary>


<table>
<tbody>

<tr>
  <td>
  <details>
  <summary>
  <code>Hosting/Saas</code>
  </summary>
  
  ```
  Netlify              :: Desc
  Vercel               :: Desc
  ```

  </details>
  </td>
  <td>

  [ ![Netlify][netlify-badge] ][netlify-link]
  [ ![Vercel][vercel-badge] ][vercel-link]
  </td>
</tr>
<tr>
  <td>
  <details>
  <summary>
  <code>Version Control</code>
  </summary>
  
  ```
  Git                  :: Desc
  Github               :: Desc
  ```

  </details>
  </td>
  <td>

  [ ![Git][git-badge] ][git-link]
  [ ![Github][github-badge] ][github-link]

  </td>
</tr>
</tbody>
</table>
</details>

<details>
<summary>
<i>Press me</i>
</summary>
<br />

> Yey, you pressed it

`ex` Ex 1, Ex 2, Ex 3

- html details tag

</details>

<div align = "center";>
	
![<hr />](https://capsule-render.vercel.app/api?type=rect&color=gradient&height=8)<br />
</div>

<h2 id="custom-badge">Custom Badge</h2>

I'm using [shield.io badge](https://shields.io) and this is the example

```markdown
[![Custom Badge](https://img.shields.io/badge/Custom%20Badge-dfe6e9?&logoColor=dfe6e9)](https://github.com/jeffersonfed)
```
[![Custom Badge](https://img.shields.io/badge/Custom%20Badge-dfe6e9?&logoColor=dfe6e9)](https://github.com/jeffersonfed)

How to create it?

- First learn how to style it, so you can create your own

```markdown
![alt-text](https://img.shields.io/badge/[text]-[color])
[![alt-text](https://img.shields.io/badge/[text]-[color])](file path/image path)

```


- To add a space, type `%20` or `_` and add `?` first, then `&` for every style you want to insert. 


| URL Input     | Badge Output  | 
| ------------- |:-------------:|
| Underscore `_` or `%20` | Space` `| 
| Double underscore `__` | Underscore `_` |   
| Double dash `--`|Dash `-` | 


Message and color only, separated by a dash `-`, for example:
```markdown
![alt-text](https://img.shields.io/badge/White1-fff)
![alt-text](https://img.shields.io/badge/White_Color2-fff)
![alt-text](https://img.shields.io/badge/White%20Color3-fff)
![alt-text](https://img.shields.io/badge/White__Color4-fff)
![alt-text](https://img.shields.io/badge/White--Color5-fff)
```
![alt-text](https://img.shields.io/badge/White1-fff)
![alt-text](https://img.shields.io/badge/White_Color2-fff)
![alt-text](https://img.shields.io/badge/White%20Color3-fff)
![alt-text](https://img.shields.io/badge/White__Color4-fff)
![alt-text](https://img.shields.io/badge/White--Color5-fff)

- For the Color Model, you can type simple text, such as Blue, White, Red, etc., but if you want a precise color, you can also add the Hex, rgb, rgba, hsl, hsla and css color.

```markdown
![alt-text](https://img.shields.io/badge/Red-red)
![alt-text](https://img.shields.io/badge/Yellow-yellow)

![alt-text](https://img.shields.io/badge/White-fff)
![alt-text](https://img.shields.io/badge/Black-000)
```
![alt-text](https://img.shields.io/badge/Red-red)
![alt-text](https://img.shields.io/badge/Yellow-yellow)

![alt-text](https://img.shields.io/badge/White-fff)
![alt-text](https://img.shields.io/badge/Black-000)

- Label, message and color separated by a dash `-`. For example:

```markdown
![alt-text](https://img.shields.io/badge/Example_Text-Red_white-red)
```
![alt-text](https://img.shields.io/badge/Example_Text-Red_Color-red)

<hr>

- Add `?` first, then style text, if you want to put another style just put `&`, for example:


```markdown
- style=flat 
![alt-text](https://img.shields.io/badge/example%201%20no%20link-dfe6e9?style=flat)
[![alt-text](https://img.shields.io/badge/example%201%20with%20link-dfe6e9?style=flat)](https://shields.io)

- style=flat-square
![alt-text](https://img.shields.io/badge/example%202%20no%20link-dfe6e9?style=flat-square)
[![alt-text](https://img.shields.io/badge/example%202%20with%20link-dfe6e9?style=flat-square)](https://shields.io)

- style=plastic
![alt-text](https://img.shields.io/badge/example%203%20no%20link-dfe6e9?style=plastic)
[![alt-text](https://img.shields.io/badge/example%203%20with%20link-dfe6e9?style=plastic)](https://shields.io)

- style=for-the-badge
![alt-text](https://img.shields.io/badge/example%204%20no%20link-dfe6e9?style=for-the-badge)
[![alt-text](https://img.shields.io/badge/example%204%20with%20link-dfe6e9?style=for-the-badge)](https://shields.io)

- style=social
![alt-text](https://img.shields.io/badge/example%205%20no%20link-dfe6e9?style=social)
[![alt-text](https://img.shields.io/badge/example%205%20with%20link-dfe6e9?style=social)](https://shields.io)
```
- style=flat 

![alt-text](https://img.shields.io/badge/example%201%20no%20link-dfe6e9?style=flat)
[![alt-text](https://img.shields.io/badge/example%201%20with%20link-dfe6e9?style=flat)](https://shields.io)

- style=flat-square

![alt-text](https://img.shields.io/badge/example%202%20no%20link-dfe6e9?style=flat-square)
[![alt-text](https://img.shields.io/badge/example%202%20with%20link-dfe6e9?style=flat-square)](https://shields.io)

- style=plastic

![alt-text](https://img.shields.io/badge/example%203%20no%20link-dfe6e9?style=plastic)
[![alt-text](https://img.shields.io/badge/example%203%20with%20link-dfe6e9?style=plastic)](https://shields.io)

- style=for-the-badge

![alt-text](https://img.shields.io/badge/example%204%20no%20link-dfe6e9?style=for-the-badge)
[![alt-text](https://img.shields.io/badge/example%204%20with%20link-dfe6e9?style=for-the-badge)](https://shields.io)

- style=social

![alt-text](https://img.shields.io/badge/example%205%20no%20link-dfe6e9?style=social)
[![alt-text](https://img.shields.io/badge/example%205%20with%20link-dfe6e9?style=social)](https://shields.io)


<h2 id="logo-badge">Logo Badge</h2>

```markdown
[![alt-text](https://img.shields.io/badge/any%20text-white?style=flat&logo=[logo name]&logoColor=#white)](https://ko-fi.com/jeffersonfed)


[![Github](https://img.shields.io/badge/My%20Github-30363D?style=plastic&logo=GitHub&logoColor=#white)](https://github.com/jeffersonfed)
[![Sponsor](https://img.shields.io/badge/Support%20Me-30363D?style=plastic&logo=GitHub-Sponsors&logoColor=#white)](https://ko-fi.com/jeffersonfed)
```

- For example github logo and github sponsor logo:

```markdown
[![Github](https://img.shields.io/badge/My%20Github-30363D?style=plastic&logo=GitHub&logoColor=#white)](https://github.com/jeffersonfed)
[![Sponsor](https://img.shields.io/badge/Support%20Me-30363D?style=plastic&logo=GitHub-Sponsors&logoColor=#white)](https://ko-fi.com/jeffersonfed)
```
[![Github](https://img.shields.io/badge/My%20Github-30363D?style=plastic&logo=GitHub&logoColor=#white)](https://github.com/jeffersonfed)
[![Sponsor](https://img.shields.io/badge/Support%20Me-30363D?style=plastic&logo=GitHub-Sponsors&logoColor=#white)](https://ko-fi.com/jeffersonrj14)

<div align = "center";>
	
![<hr />][hr-style]<br />
</div>



<!-- 
====== Line ====== 
-->

 [hr-style]: https://capsule-render.vercel.app/api?type=rect&color=gradient&height=1.5



 <!-- ------------------------------------ -->
<!-- 
====== Tech Stack ====== 
-->

<!-- AlpineJS -->
[alpinejs-badge]: https://img.shields.io/badge/Alpine%20JS-black?style=for-the-badge&logo=alpinedotjs&logoColor=8BC0D0
[alpinejs-link]: https://alpinejs.dev

<!-- Astro -->
[astro-badge]: https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE
[astro-link]: https://astro.build

<!-- Bootstrap -->
[bootstrap-badge]: https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-link]: https://getbootstrap.com

<!-- Font Awesome -->
[fontawesome-badge]: https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white
[fontawesome-link]: https://fontawesome.com

<!-- Github Pages -->
[githubpages-badge]: https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white
[githubpages-link]: https://pages.github.com

<!-- Jekyll -->
[jekyll-badge]: https://img.shields.io/badge/Jekyll-CC0000?style=for-the-badge&logo=Jekyll&logoColor=white
[jekyll-link]: https://jekyllrb.com

<!-- Jquery -->
[jquery-badge]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-link]: https://jquery.com

<!-- NextJS -->
[nextjs-badge]: https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[nextjs-link]: https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white

<!-- NodeJS -->
[nodejs-badge]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-link]: https://nodejs.org/en

<!-- NPM -->
[npm-badge]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-link]: https://www.npmjs.com

<!-- PNPM -->
[pnpm-badge]: https://img.shields.io/badge/pnpm-yellow?style=for-the-badge&logo=pnpm&logoColor=white
[pnpm-link]: https://pnpm.io

<!-- React -->
[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-link]: https://react.dev

<!-- React Router -->
[reactrouter-badge]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[reactrouter-link]: https://reactrouter.com/en/main

<!-- Redux -->
[redux-badge]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[redux-link]: https://redux.js.org

<!-- SASS -->
[sass-badge]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[sass-link]: https://sass-lang.com

<!-- Tailwind CSS -->
[tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-link]: https://tailwindcss.com

<!-- Vite -->
[vite-badge]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[vite-link]: https://vitejs.dev

<!-- Vue JS -->
[vue-badge]: https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D
[vue-link]: https://vuejs.org

<!-- Yarn -->
[yarn-badge]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[yarn-link]: https://yarnpkg.com

<!-- Netlify -->
[netlify-badge]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[netlify-link]: https://www.netlify.com

<!-- Vercel -->
[vercel-badge]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[vercel-link]: https://vercel.com/dashboard

<!-- Git -->
[git-badge]: https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white
[git-link]: https://git-scm.com

<!-- Github -->
[github-badge]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
[github-link]: https://github.com