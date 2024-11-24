# Bike Store


### A Backend Project of Node.JS Express.JS, Mongoose and using TypeScript
### Goal of this Project
- Create a Product schema
- Make a Order schema

**Product:**
```typescript
product{
    name
    brand
    price(number)
    category
    description
    quantity(number)
    inStock(boolean)
}
```

**Order:**
```typescript
order {
    email
    product -> ref
    quantity (number)
    totalPrice (number)
}
```

### **Folder Structure**

```typescript
src
---app.ts
---service.ts
-->module
-----product
       product.interface.ts
       product.model.ts
       product.controller.ts
       product.service.ts
       product.router.ts
-----order
       order.interface.ts
       order.model.ts
       order.controller.ts
       order.service.ts
       order.router.ts
```

### npm run command
``` typescript
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build":"tsc",
    "lint": "npx eslint --ignore-pattern '.js,.ts'",
    "lint:fix": "npx eslint . --fix",
    "format": "npx prettier --ignore-path .prettierignore --write \"**/*.{js,ts,json}\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

https://bike-store-azure.vercel.app