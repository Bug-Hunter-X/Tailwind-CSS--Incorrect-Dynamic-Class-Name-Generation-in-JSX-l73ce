```javascript
// Example showing incorrect usage of Tailwind directives within a JavaScript template literal
div className={`bg-${someVariable ? 'red' : 'blue'}-500`}>
{/* ... */}
</div>
```