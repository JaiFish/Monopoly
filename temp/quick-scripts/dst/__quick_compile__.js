
(function () {
var scripts = [{"deps":{"./assets/Script/WebPostMessage":16,"./assets/Script/Asset/AnimationAsset":24,"./assets/Script/Asset/MusicAsset":28,"./assets/Script/Asset/PrefabAsset":26,"./assets/Script/Asset/SpineAsset":25,"./assets/Script/Asset/SpriteAsset":23,"./assets/Script/Asset/SpriteAtlasAsset":27,"./assets/Script/Asset/AssetMng":21,"./assets/Script/Class/Panel_AniPath":29,"./assets/Script/Class/Panel_Bear":33,"./assets/Script/Class/Panel_Bufer":34,"./assets/Script/Class/Panel_Door":17,"./assets/Script/Class/Panel_Cloud":38,"./assets/Script/Class/Panel_Loading":37,"./assets/Script/Class/Panel_Test":67,"./assets/Script/Class/Panel_Map":18,"./assets/Script/Class/Panel_Version":31,"./assets/Script/Class/CameraControll":19,"./assets/Script/Class/Mam/Panel_Man":2,"./assets/Script/Class/Mam/ManAnimation":36,"./assets/Script/Class/Message/Choose_Train":32,"./assets/Script/Class/Message/EndGame":30,"./assets/Script/Class/Message/Explain":35,"./assets/Script/Class/Message/GetProps":41,"./assets/Script/Class/Message/MessageAction":66,"./assets/Script/Class/Message/Panel_Message":39,"./assets/Script/Class/Message/QAAnswer":9,"./assets/Script/Class/Message/Question":40,"./assets/Script/Class/Message/StationInfo":44,"./assets/Script/Class/Message/Choose_Ticket":43,"./assets/Script/Class/UI/Props_Feature":53,"./assets/Script/Class/UI/Setting":45,"./assets/Script/Class/UI/SettingBtn":42,"./assets/Script/Class/UI/Station":20,"./assets/Script/Class/UI/StationBtn":46,"./assets/Script/Class/UI/Panel_UI":10,"./assets/Script/Data/DataMan":48,"./assets/Script/Data/DelayTime":50,"./assets/Script/Data/MyMath":51,"./assets/Script/Data/TrainInfoLibrary":47,"./assets/Script/Data/DataCloud":56,"./assets/Script/Data/QA/ChooseLibrary":49,"./assets/Script/Data/QA/ExplainLibrary":3,"./assets/Script/Data/QA/QALibrary":65,"./assets/Script/Data/QA/PropsLibrary":52,"./assets/Script/Data/QA/AnswerLibrary":55,"./assets/Script/Data/base/MusciMng":62,"./assets/Script/Data/base/ComponentBase":22,"./assets/Script/Data/base/ButtonMng":63,"./assets/Script/Enum/CameraState":54,"./assets/Script/Enum/Commad":64,"./assets/Script/Enum/Easing":57,"./assets/Script/Enum/GameEvent":60,"./assets/Script/Enum/GameState":58,"./assets/Script/Enum/StationType":61,"./assets/Script/Enum/TypeClass":1,"./assets/Script/Enum/TrainType":59,"./assets/Script/Enum/onClick":13,"./assets/Script/Enum/BearState":12,"./assets/Script/Event/EventMng":7,"./assets/Script/GameControll":11,"./assets/Script/Interface/IAsset":8,"./assets/Script/Item/MapItem":5,"./assets/Script/Item/MapSprite":14,"./assets/Script/Item/CloudItem":15,"./assets/Script/ShaderCamera/BuferClass":6,"./assets/Script/GameModle":4},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{"../../Enum/GameEvent":60,"../../Data/MyMath":51,"../../Enum/Commad":64,"../../Event/EventMng":7,"./ManAnimation":36,"../../Enum/GameState":58},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./WebPostMessage":16},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{"../Data/base/ComponentBase":22},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{"../Data/base/ComponentBase":22,"../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22,"../../Data/base/MusciMng":62,"../../Enum/Commad":64,"../../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"../../Data/base/ButtonMng":63,"../../Data/base/MusciMng":62,"../../Data/base/ComponentBase":22,"../../Enum/Commad":64,"../../Enum/GameEvent":60,"./Props_Feature":53,"./Setting":45,"./Station":20},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{"./GameModle":4,"./Class/Panel_AniPath":29,"./Class/Panel_Cloud":38,"./Class/Panel_Map":18,"./Class/Panel_Door":17,"./Class/Panel_Bear":33,"./Class/Panel_Version":31,"./Class/Panel_Test":67,"./Class/Panel_Bufer":34,"./Class/Panel_Loading":37,"./Class/CameraControll":19,"./Asset/AssetMng":21,"./Class/Mam/Panel_Man":2,"./Enum/GameState":58,"./Enum/CameraState":54,"./Enum/GameEvent":60,"./Class/UI/Panel_UI":10,"./Class/Message/Panel_Message":39,"./Data/DelayTime":50,"./Data/base/MusciMng":62,"./Data/base/ComponentBase":22,"./Data/QA/ChooseLibrary":49,"./Data/QA/AnswerLibrary":55,"./Data/QA/ExplainLibrary":3,"./Data/QA/PropsLibrary":52,"./Data/QA/QALibrary":65,"./Data/TrainInfoLibrary":47},"path":"preview-scripts/assets/Script/GameControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{"../Enum/Easing":57,"../Enum/GameEvent":60,"../Enum/Commad":64,"../Data/base/ComponentBase":22,"../Data/base/ButtonMng":63},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{"../Data/base/ComponentBase":22,"../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{"./Enum/Commad":64,"./Enum/GameEvent":60,"./Event/EventMng":7},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{"../Data/base/ButtonMng":63,"../Data/base/ComponentBase":22,"../Data/base/MusciMng":62,"../Enum/Commad":64,"../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../Asset/AssetMng":21,"../Enum/GameEvent":60,"../Enum/StationType":61,"../Data/base/ComponentBase":22,"../Item/MapSprite":14,"../GameModle":4,"../Item/MapItem":5},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../Enum/Easing":57,"../Data/base/ComponentBase":22,"../Enum/GameEvent":60,"../GameModle":4,"../Enum/CameraState":54},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{"../../Data/base/ComponentBase":22,"../../Asset/AssetMng":21,"../../Data/base/MusciMng":62,"../../Enum/GameEvent":60,"../../GameModle":4,"./StationBtn":46},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{"./AnimationAsset":24,"./MusicAsset":28,"./SpriteAsset":23,"./SpriteAtlasAsset":27},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{"../../Event/EventMng":7},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{"../Data/base/ComponentBase":22},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22,"../../Enum/Commad":64,"../../Data/base/MusciMng":62,"../../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../Data/base/ComponentBase":22},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../../GameModle":4,"../../Asset/AssetMng":21,"../../Enum/Commad":64,"../../Enum/TrainType":59,"../../Enum/GameEvent":60,"../../Data/base/MusciMng":62,"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"../Asset/AssetMng":21,"../Data/base/ComponentBase":22,"../Enum/BearState":12,"../GameModle":4,"../Enum/GameState":58},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../Data/base/ComponentBase":22,"../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{"../../Data/base/ButtonMng":63,"../../Data/base/MusciMng":62,"../../Data/base/ComponentBase":22,"../../Enum/Commad":64,"../../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/DataMan":48},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../Data/base/ComponentBase":22},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{"../Enum/GameEvent":60,"../Data/DataCloud":56,"../Item/CloudItem":15,"../Asset/AssetMng":21},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../../Enum/GameEvent":60,"./Choose_Ticket":43,"./Choose_Train":32,"./EndGame":30,"./Explain":35,"./GetProps":41,"./MessageAction":66,"./QAAnswer":9,"./Question":40,"./StationInfo":44},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../GameModle":4,"../../Enum/GameEvent":60,"../../Enum/Commad":64,"../../Data/base/ComponentBase":22,"../../Data/base/ButtonMng":63,"../../Data/base/MusciMng":62},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22,"../../Data/base/MusciMng":62,"../../Enum/Commad":64,"../../Enum/Easing":57,"../../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22,"../../Data/base/MusciMng":62},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{"../../Data/base/ComponentBase":22,"../../Data/base/MusciMng":62,"../../Enum/Commad":64,"../../Enum/GameEvent":60,"../../Enum/onClick":13,"../../GameModle":4},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22,"../../Enum/Commad":64,"../../Enum/GameEvent":60,"../../Data/base/MusciMng":62},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Data/base/ComponentBase":22,"../../Data/base/MusciMng":62,"./SettingBtn":42},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ButtonMng":63,"../../Data/base/ComponentBase":22,"../../Enum/Commad":64,"../../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{"./base/ComponentBase":22},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ComponentBase":22,"../../Data/base/MusciMng":62,"../../Enum/Commad":64,"../../Enum/GameEvent":60},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{"../Data/base/ComponentBase":22},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{"../../Asset/AssetMng":21},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{"../../Data/base/ComponentBase":22,"../../Enum/Easing":57},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../Enum/Commad":64,"../Enum/GameEvent":60,"../Data/base/ComponentBase":22,"../Data/base/ButtonMng":63,"../Data/base/MusciMng":62},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    