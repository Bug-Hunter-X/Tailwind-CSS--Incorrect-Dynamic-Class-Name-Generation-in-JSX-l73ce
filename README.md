# Tailwind CSS Bug: Dynamic Class Name Generation
This repository demonstrates a common error when using Tailwind CSS with dynamic class names within JavaScript template literals (JSX).  The `bug.js` file shows the incorrect implementation, resulting in invalid Tailwind classes.  The `bugSolution.js` file provides a corrected version.

## Problem
Incorrectly concatenating Tailwind class names with variables can lead to classes that Tailwind cannot parse, resulting in no styling or unexpected behavior.

## Solution
Use template literals effectively to generate valid Tailwind class names. Avoid directly concatenating variables without properly handling hyphens and class name separators.