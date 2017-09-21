Server Side Rendering with Create React App
===========================================

This is the v2.1 version of my react app, checkout my article here: 
https://medium.com/@benlu/ssr-with-create-react-app-v2-1-ee83fb767327

Install
-------
```bash
yarn install
yarn build
yarn start:prod:server
```

### Development
This just runs create react app, its great!
```bash
yarn start
```

Limitations
-----------
1. In development, you can't run server rendering. So to use server rendering, you have to run a build, making sure all the files are in the correct place before actually being able to view server side code
2. You need to run Create React App + Server seperately, especially for database related things, you need both, I could run concurrently, however, I like the nice output and followability you get from two seperate run processes
3. A lot of code is repeated or just kinda messy. There's a lot of states, and these need to be handled both server side and client side so they're duplicated.
