# react-navigation-templates  
[![Platform](https://img.shields.io/badge/platform-ios_android-brightgreen.svg?style=flat)](#)[![npm](https://img.shields.io/npm/v/react-navigation-templates.svg)](https://www.npmjs.com/package/react-navigation-templates)

A collection of react-navigation templates. Notice that each template used [Redux](https://github.com/reactjs/react-redux) to store it's state.

**Project directory**
    
~~~
|-- index.js                
|-- src/                    
    |-- actions/            Redux action.
    |-- reducers/           Redux reducer.
    |-- components/         Display components responsible for interface rendering and its own state control.
    |-- containers/         Container components, mainly from state, get the (minimum) properties required by the component.
        |-- navigators/     Some naigatore. e.g. StackNavigator, TabNavigator, DrawerNavigator.
        |-- screens/          
        |-- App.js          
    |-- sources/            
    |-- utils/              
    |-- api/                
    |-- config/             Global configuration.
~~~

**Navigation structure**

* Default

![](https://ws1.sinaimg.cn/mw690/962a6dfegy1fo6ikz2i2kj212008o3zn.jpg)

