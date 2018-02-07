# react-navigation-templates    [![Platform](https://img.shields.io/badge/platform-ios_android-brightgreen.svg?style=flat)](#)[![npm](https://img.shields.io/npm/v/react-navigation-templates.svg)](https://www.npmjs.com/package/react-navigation-templates)

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

* Default [Demo](https://ws1.sinaimg.cn/large/962a6dfegy1fo7vv9kux1g20dh0rbkjp.gif)

    ![](https://ws1.sinaimg.cn/mw690/962a6dfegy1fo7qyzy1snj21220c4wfn.jpg)

* StackInTab [Demo](https://ws1.sinaimg.cn/large/962a6dfegy1fo7vzxawpog20hg0z4npk.gif)

    ![](https://ws1.sinaimg.cn/mw690/962a6dfegy1fo7qyzuspij20vg0c83zg.jpg)

* NoDrawer 

    ![](https://ws1.sinaimg.cn/mw690/962a6dfegy1fo7qyzwfg1j212m0c2wfm.jpg)

* NoDrawer And StackInTab

    ![](https://ws1.sinaimg.cn/mw690/962a6dfegy1fo7qyzvhaxj20xc0cgq3w.jpg)




