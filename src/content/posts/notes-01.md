---
title: 'Personal Notes 01: LaTeX'
publishedAt: 2024-11-19
description: ''
slug: 'personal-notes-01'
isPublish: true
lastUpdated: 2024-11-19
---

# LaTeX Cheat Sheet

## Basic Document Structure
```latex
\documentclass{article}     % Document type
\begin{document}            % Start of document
    % Your content goes here
\end{document}              % End of document
```

## Text Formatting

- Bold Text: `\textbf{Bold Text}`
- Italic Text: `\textit{Italic Text}`
- Underline Text: `\underline{Underlined Text}`
- Typewriter/Text Font: `\texttt{Typewriter Text}`
- Small Text: `\small{Small Text}`
- Large Text: `\large{Large Text}`
- Font Sizes: `\tiny`, `\scriptsize`, `\footnotesize`, `\normalsize`, `\large`, `\Large`, `\huge`, `\Huge`

## Lists
### Bullet Lists:
```latex
\begin{itemize}
    \item First item
    \item Second item
\end{itemize}
```

### Numbered List:
```latex
\begin{enumerate}
    \item First item
    \item Second item
\end{enumerate}
```

## Sections and Headings
```latex
\section{Section Title}
\subsection{Subsection Title}
\subsubsection{Subsubsection Title}
```

## Mathematics
### Inline Math:
```latex
This is inline math: \( E = mc^2 \)
```

### Display Math:
```latex
\[
E = mc^2
\]
```

### Greek Letters:
- Lowercase: `\alpha`, `\beta`, `\gamma`, `\delta`, `\epsilon`, etc.
- Uppercase: `\Gamma`, `\Delta`, `\Theta`, `\Lambda`, `\Sigma`, etc.

### Fractions:
```latex
\frac{a}{b}   % Fraction
```

### Exponents and Subscripts:
```latex
a^2          % Exponent
a_i          % Subscript
a^{i+1}      % Exponent with expression
```

### Summation and Integrals:
```latex
\sum_{i=1}^{n} i^2   % Summation
\int_{0}^{\infty} x^2 \, dx  % Integral
```

### Matrices:
```latex
\[
\begin{pmatrix}
    a & b \\
    c & d
\end{pmatrix}
\]
```

### Roots:
```latex
\sqrt{x}         % Square root
\sqrt[n]{x}      % nth root
```

## Special Symbols
- Pi: `\pi`
- Infinity: `\infty`
- Approximately: `\approx`
- Greater Than: `\gt`
- Less Than: `\lt`
- Integral: `\int`
- Summation: `\sum`

## Aligning Equations
```latex
\begin{align*}
    a &= b + c \\
    x &= y - z
\end{align*}
```

## Tables
```latex
\begin{tabular}{|c|c|c|}
\hline
A & B & C \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\hline
\end{tabular}
```

## References and Citations
### Figures:
```latex
\begin{figure}
    \centering
    \includegraphics{image.png}
    \caption{This is a figure.}
    \label{fig:my_label}
\end{figure}
```

### Tables:
```latex
\begin{table}
    \centering
    \begin{tabular}{|c|c|}
        \hline
        Item & Price \\
        \hline
        Apple & \$1 \\
        Banana & \$2 \\
        \hline
    \end{tabular}
    \caption{Fruit Prices}
    \label{tab:my_label}
\end{table}
```

### Cross-References:
See Figure `\ref{fig:my_label}` for more information.

## Lists of References (Bibliography)
```latex
\bibliographystyle{plain}
\bibliography{references.bib}
```

## Including Graphics
```latex
\usepackage{graphicx}
\includegraphics[width=\textwidth]{image.png}
```

## Customizing Page Layout
### Margins:
```latex
\usepackage[a4paper, left=1in, right=1in, top=1in, bottom=1in]{geometry}
```

### Header and Footer:
```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\lhead{Left Header}
\rhead{Right Header}
\cfoot{Page \thepage}
```

## Hyperlinks
```latex
\usepackage{hyperref}
\href{https://www.example.com}{Click Here}
```

## Including Code
```latex
\usepackage{listings}
\begin{lstlisting}
def hello():
    print("Hello, World!")
\end{lstlisting}
```

Happy typesetting! 🎉