```javascript
// Correct usage of Tailwind directives within a JavaScript template literal
const bgClass = someVariable ? 'red' : 'blue';
div className={`bg-${bgClass}-500`}>
{/* ... */}
</div>
```