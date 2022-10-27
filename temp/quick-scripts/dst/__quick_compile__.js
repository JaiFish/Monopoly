
(function () {
var scripts = [{"deps":{"./assets/Script/Data/QA/QALibrary":8,"./assets/Script/Asset/AnimationAsset":10,"./assets/Script/Enum/StationType":12,"./assets/Script/Data/base/ButtonMng":13,"./assets/Script/Event/EventMng":14,"./assets/Script/Interface/IAsset":15,"./assets/Script/Data/DelayTime":42,"./assets/Script/Data/TrainInfoLibrary":43,"./assets/Script/Data/MyMath":44,"./assets/Script/Data/QA/AnswerLibrary":45,"./assets/Script/Enum/CameraState":46,"./assets/Script/Data/QA/PropsLibrary":47,"./assets/Script/Data/QA/ChooseLibrary":49,"./assets/Script/Enum/BearState":50,"./assets/Script/Enum/Commad":51,"./assets/Script/Enum/onClick":53,"./assets/Script/Enum/Easing":55,"./assets/Script/Enum/GameEvent":56,"./assets/Script/Enum/TypeClass":58,"./assets/Script/Enum/TrainType":59,"./assets/Script/Enum/GameState":61,"./assets/Script/Data/QA/ExplainLibrary":62,"./assets/Script/Asset/MusicAsset":64,"./assets/Script/Asset/SpriteAtlasAsset":65,"./assets/Script/Asset/SpineAsset":66,"./assets/Script/Asset/PrefabAsset":67,"./assets/Script/Asset/SpriteAsset":68,"./assets/Script/Asset/AssetMng":2,"./assets/Script/Class/Panel_Door":3,"./assets/Script/WebPostMessage":11,"./assets/Script/Class/Mam/Panel_Man":1,"./assets/Script/Class/Panel_Map":6,"./assets/Script/Class/CameraControll":7,"./assets/Script/Class/Message/QAAnswer":4,"./assets/Script/Class/UI/Station":5,"./assets/Script/GameModle":22,"./assets/Script/Class/UI/Panel_UI":9,"./assets/Script/ShaderCamera/BuferClass":17,"./assets/Script/Item/CloudItem":16,"./assets/Script/Class/Panel_AniPath":18,"./assets/Script/Class/Panel_Cloud":19,"./assets/Script/Class/Panel_Bufer":20,"./assets/Script/Class/Panel_Version":25,"./assets/Script/Class/Panel_Test":21,"./assets/Script/Class/Panel_Loading":26,"./assets/Script/Class/Panel_Bear":23,"./assets/Script/Data/DataCloud":40,"./assets/Script/Data/DataMan":41,"./assets/Script/Item/MapItem":57,"./assets/Script/GameControll":63,"./assets/Script/Class/Mam/ManAnimation":24,"./assets/Script/Class/Message/GetProps":27,"./assets/Script/Class/Message/MessageAction":28,"./assets/Script/Class/Message/Explain":29,"./assets/Script/Class/Message/Choose_Ticket":30,"./assets/Script/Item/MapSprite":60,"./assets/Script/Class/Message/EndGame":31,"./assets/Script/Class/Message/Question":32,"./assets/Script/Class/Message/Panel_Message":33,"./assets/Script/Class/Message/StationInfo":34,"./assets/Script/Class/Message/Choose_Train":35,"./assets/Script/Class/UI/StationBtn":36,"./assets/Script/Class/UI/Props_Feature":38,"./assets/Script/Class/UI/Setting":37,"./assets/Script/Class/UI/BackGameUse":39,"./assets/Script/Class/UI/SettingBtn":48,"./assets/Script/Data/base/ComponentBase":54,"./assets/Script/Data/base/MusciMng":52},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/base/MusciMng":52,"./ManAnimation":24,"../../Data/MyMath":44,"../../Event/EventMng":14,"../../Enum/Commad":51,"../../Enum/GameState":61,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{"./AnimationAsset":10,"./MusicAsset":64,"./SpriteAsset":68,"./SpriteAtlasAsset":65},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{"../Enum/Commad":51,"../Data/base/ComponentBase":54,"../Data/base/ButtonMng":13,"../Data/base/MusciMng":52,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../../Enum/Commad":51,"../../Data/base/ButtonMng":13,"../../Data/base/MusciMng":52,"../../Enum/GameEvent":56,"../../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"../../Data/base/MusciMng":52,"../../Asset/AssetMng":2,"../../Data/base/ComponentBase":54,"./StationBtn":36,"../../GameModle":22,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{"../Asset/AssetMng":2,"../Data/base/ComponentBase":54,"../Item/MapItem":57,"../Item/MapSprite":60,"../GameModle":22,"../Enum/StationType":12,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../Enum/CameraState":46,"../Enum/GameEvent":56,"../Data/base/ComponentBase":54,"../Enum/Easing":55,"../GameModle":22},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{"../../Enum/GameEvent":56,"../../Enum/Commad":51,"../../Data/base/ButtonMng":13,"./Props_Feature":38,"./BackGameUse":39,"../../Data/base/MusciMng":52,"./Setting":37,"./Station":5,"../../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{"./Event/EventMng":14,"./Enum/GameEvent":56,"./Enum/Commad":51},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{"../Data/base/ComponentBase":54,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{"../Enum/GameEvent":56,"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../Data/DataCloud":40,"../Asset/AssetMng":2,"../Item/CloudItem":16,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../Enum/GameEvent":56,"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{"../Data/base/ComponentBase":54,"../Enum/Commad":51,"../Data/base/ButtonMng":13,"../Enum/GameEvent":56,"../Data/base/MusciMng":52},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"./WebPostMessage":11},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{"../Enum/BearState":50,"../GameModle":22,"../Data/base/ComponentBase":54,"../Asset/AssetMng":2,"../Enum/GameState":61},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../../Data/DataMan":41},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":54,"../../Enum/Commad":51,"../../Enum/Easing":55,"../../Data/base/ButtonMng":13,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Data/base/ComponentBase":54,"../../Enum/Easing":55},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../../Data/base/ComponentBase":54,"../../Data/base/MusciMng":52,"../../Data/base/ButtonMng":13,"../../Enum/GameEvent":56,"../../Enum/Commad":51},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/base/ComponentBase":54,"../../GameModle":22,"../../Enum/GameEvent":56,"../../Data/base/MusciMng":52,"../../Enum/onClick":53,"../../Enum/Commad":51},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"../../Asset/AssetMng":2,"../../Enum/Commad":51,"../../Data/base/ComponentBase":54,"../../Data/base/ButtonMng":13,"../../Data/base/MusciMng":52,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../../Data/base/ComponentBase":54,"../../Data/base/ButtonMng":13,"../../Enum/Commad":51,"../../Enum/GameEvent":56,"../../GameModle":22,"../../Data/base/MusciMng":52},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Enum/GameEvent":56,"./Choose_Ticket":30,"./GetProps":27,"./MessageAction":28,"./Explain":29,"./Question":32,"./QAAnswer":4,"./Choose_Train":35,"./EndGame":31,"./StationInfo":34},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Data/base/ButtonMng":13,"../../Enum/Commad":51,"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":54,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Asset/AssetMng":2,"../../Data/base/ButtonMng":13,"../../Enum/Commad":51,"../../Data/base/ComponentBase":54,"../../Data/base/MusciMng":52,"../../GameModle":22,"../../Enum/TrainType":59,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"../../Asset/AssetMng":2,"../../Enum/GameEvent":56,"../../Data/base/ComponentBase":54,"../../Data/base/ButtonMng":13,"../../Enum/Commad":51},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":54,"./SettingBtn":48},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{"../../Asset/AssetMng":2,"../../Enum/GameEvent":56,"../../Enum/Commad":51,"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"../../Enum/Commad":51,"../../Data/base/ButtonMng":13,"../../Data/base/MusciMng":52,"../../Enum/GameEvent":56,"../../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Class/UI/BackGameUse.js"},{"deps":{"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{"./base/ComponentBase":54},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{"../../Asset/AssetMng":2,"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":54,"../../Data/base/ButtonMng":13},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{"../../Asset/AssetMng":2},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{"../../Event/EventMng":14},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{"../Data/base/ComponentBase":54},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{"../Enum/Commad":51,"../Data/base/ComponentBase":54,"../Data/base/ButtonMng":13,"../Enum/Easing":55,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./Class/Mam/Panel_Man":1,"./Asset/AssetMng":2,"./GameModle":22,"./Class/CameraControll":7,"./Enum/GameEvent":56,"./Class/Message/Panel_Message":33,"./Class/Panel_AniPath":18,"./Class/Panel_Cloud":19,"./Class/Panel_Door":3,"./Data/base/ComponentBase":54,"./Class/UI/Panel_UI":9,"./Data/QA/ExplainLibrary":62,"./Data/QA/AnswerLibrary":45,"./Class/Panel_Map":6,"./Data/QA/QALibrary":8,"./Data/DelayTime":42,"./Data/QA/PropsLibrary":47,"./Data/QA/ChooseLibrary":49,"./Class/Panel_Bear":23,"./Enum/GameState":61,"./Data/TrainInfoLibrary":43,"./Enum/CameraState":46,"./Class/Panel_Version":25,"./Class/Panel_Loading":26,"./Class/Panel_Test":21,"./Data/base/MusciMng":52,"./Class/Panel_Bufer":20},"path":"preview-scripts/assets/Script/GameControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"}];
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
    