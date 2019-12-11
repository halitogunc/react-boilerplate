# React Boilerplate

A boilerplate for setting up your react project in seconds with hot module reload, webpack, jest, eslint, prettier and husky support.

![react-boilerplate](https://user-images.githubusercontent.com/13641726/66274995-abf81480-e884-11e9-8987-e9113cc7e6b2.gif)



### Getting Started

```bash
git clone https://github.com/halitogunc/react-boilerplate.git my-react-app
cd my-react-app
yarn install  # install dependencies
yarn start    # start dev server
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.



You will be using `yarn start` most of the time while developing, but also you can find other useful commands below.

| `yarn <script>`   | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| `start`           | Start the app in dev mode                                                                                |
| `start:profiling` | Start the app in dev mode along with BundleAnalyzerPlugin report                                         |
| `build`           | Build the app in production mode                                                                         |
| `build:profiling` | Build the app in production mode along with BundleAnalyzerPlugin report                                  |
| `test`            | Run tests                                                                                                |
| `test:coverage`   | Run tests, collect and report coverage information                                                      |
| `lint`            | Check all `js,jsx` files whether they match given coding style                                           |
| `lint:fix`        | Check all `js,jsx` files whether they match given coding style. If error is auto-fixable, try to fix it. |
| `precommit`       | Run linters on git staged files                                                                          |



### Why did you create it ?

create-react-app covers most of the needs for react apps without configuring any tools like Webpack and Babel. But for the projects that I started/joined, I had to adjust these configuration tools according to project needs in small/big size. So I created a boilerplate that contains the basics I need in every project to stop wasting my time.
