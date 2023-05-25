# What is the main changes in Next.js 13?

## New features

- [App Router](https://nextjs.org/docs/app/building-your-application/routing).
- [Server Component](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components).
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- more...

---

## What i can't do with Server Components in Next.js 13?

- Can't use event handle inside Server Component.

- Can't use useEffect or any hook run on client side inside fo Server Component.

- Can't import Server Component inside Client Component but you can send Server Component to Client Component as props and it's will works.

---

## What is new with App Router in Next.js 13?

- We can use async and await in Server Component.

- If you need to use event handle or client hoohs like useEffect you can use Client Component and you can use that component inside Server Component.
> ⚠️ Make sure to add `use client` in the top of Client Component file

- All components inside the App Router are Server Components by default.

- If you need to use Client Component you have to add `use client` in the top of a component file.

- If you are using `fetch()` function for fetching data the request will be Cached by default.

- Revalidating Data with `fetch()` function. Example: If you have a page and this page display an image from api and the api will return random image every time you refresh the page.
  And we need the request be cached but in this case the image will not change when we try to refresh the page so we can solve this by using revalidate this will revalidate cached data at a specific interval. The revalidate property take number in seconds.

  ```js
  const getRandomDogImage = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random",
          {
            next: {
              revalidate: 60,
            },
          }
        );
        const data = await response.json();
        resolve(data);
      }, 2500);
    });
  };
  ```

- If you need to disable cacheing add `{cache: 'no-store'}` to the request.

```js
fetch("https://dog.ceo/api/breeds/image/random", { cache: "no-store" });
```

**If you using TypeScript and you have Server Component have async and await and you need to use this component you will have problem. [Here you can find a fix for it.]
(https://github.com/vercel/next.js/issues/42292)**
