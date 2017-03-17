
```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```



|`npm run <script>`|解释|
|------------------|-----------|
|`start`|服务启动在3000端口，代码热替换开启。|
|`compile`|编译程序到dist目录下（默认目录~/dist）。|
|`dev`|与`npm start`相同, 但是启动nodemon守护进程。|
|`dev:no-debug`|与`npm run dev` 但是禁用devtool（开发工具）。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`test:dev`|开启Karma测试并监听改变随时重新测试，但是生成覆盖率报告。|
|`deploy`|启动代码检查，测试，如果成功，编译到dist目录下。|
|`deploy:dev`|与`deploy`相同，但是`NODE_ENV`值为"development"。|
|`deploy:prod`|与`deploy`相同，但是`NODE_ENV`值为"production"。|
|`lint`|检查所有.js文件是否规范。|
|`lint:fix`|检查所有.js文件是否规范并修复它们。 [更多](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

