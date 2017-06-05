# PMIS System Configuration

Before doing anything else make sure you have these applications:

- [npm](https://nodejs.org/it/download/)
  > This is used for running **bower** and downloading required libraries

- [git](https://git-scm.com/downloads)
  > This is the SVN used for downloading and updating this repository

**`npm` and `git` are required during development only, they are not used in production!**


## 1. Get this source

```
$ git clone https://github.com/sangahco/pmis-system-config.git
```

## 2. Fetch Dependencies

Go inside the new folder (pmis-console) and execute these commands from a console:

```
$ npm install
$ git submodule update
$ node_modules/bower-installer/bower-installer.js
```

``npm install`` will install the necessary modules, ``bower`` and ``bower-installer``
and will prepare the root folder with necessary dependencies.

``git submodule update`` will retrieve some AngularJS commons libraries from our git repository
used by this application.

The following folders will be created under the root folder:

- node_modules (*only development*)
  > Used in order to run bower, but not required in production.

- bower_components (*only development*)
  > Used by bower to take libraries, used only when you prepare the folder, not required to run the application.

- libs
  > Contains the libraries required by the application (jquery,bootstrap,angular).

## 3. Build the Source

After you installed the required npm modules you can type on a terminal the following command:

```
> npm run publish
```

A new `build` folder will be created with files ready to be deployed.
And another `dist` folder where you find a compressed file with all the built files into it.