
(function () {
var scripts = [{"deps":{"./assets/Script/Asset/AnimationAsset":5,"./assets/Script/Data/QA/ChooseLibrary":9,"./assets/Script/Enum/CameraState":11,"./assets/Script/Event/EventMng":13,"./assets/Script/Asset/MusicAsset":15,"./assets/Script/Asset/SpineAsset":16,"./assets/Script/Asset/PrefabAsset":18,"./assets/Script/Interface/IAsset":19,"./assets/Script/Asset/SpriteAsset":20,"./assets/Script/Asset/SpriteAtlasAsset":22,"./assets/Script/Data/DelayTime":43,"./assets/Script/Data/MyMath":45,"./assets/Script/Data/TrainInfoLibrary":46,"./assets/Script/Data/QA/QALibrary":48,"./assets/Script/Data/QA/AnswerLibrary":51,"./assets/Script/Enum/Easing":52,"./assets/Script/Data/QA/PropsLibrary":53,"./assets/Script/Enum/GameEvent":54,"./assets/Script/Enum/onClick":55,"./assets/Script/Enum/Commad":56,"./assets/Script/Data/base/ButtonMng":57,"./assets/Script/Enum/TypeClass":59,"./assets/Script/Enum/TrainType":60,"./assets/Script/Enum/BearState":62,"./assets/Script/Enum/StationType":63,"./assets/Script/Enum/GameState":64,"./assets/Script/Data/QA/ExplainLibrary":67,"./assets/Script/Class/Panel_Map":2,"./assets/Script/Class/Panel_Door":6,"./assets/Script/WebPostMessage":10,"./assets/Script/Class/Mam/Panel_Man":1,"./assets/Script/Class/CameraControll":7,"./assets/Script/Class/Message/QAAnswer":3,"./assets/Script/Class/UI/Station":4,"./assets/Script/GameModle":61,"./assets/Script/Class/UI/Panel_UI":8,"./assets/Script/Item/MapItem":14,"./assets/Script/ShaderCamera/BuferClass":17,"./assets/Script/Asset/AssetMng":21,"./assets/Script/Class/Panel_AniPath":24,"./assets/Script/Class/Panel_Bear":23,"./assets/Script/Class/Panel_Bufer":25,"./assets/Script/Class/Panel_Cloud":26,"./assets/Script/Class/Panel_Loading":27,"./assets/Script/Class/Panel_Version":30,"./assets/Script/Class/Panel_Test":29,"./assets/Script/Data/DataMan":44,"./assets/Script/Data/DataCloud":47,"./assets/Script/Data/base/ComponentBase":12,"./assets/Script/GameControll":68,"./assets/Script/Class/Mam/ManAnimation":28,"./assets/Script/Class/Message/Explain":31,"./assets/Script/Class/Message/Choose_Ticket":32,"./assets/Script/Class/Message/Panel_Message":33,"./assets/Script/Class/Message/Choose_Train":34,"./assets/Script/Class/Message/Question":35,"./assets/Script/Class/Message/GetProps":36,"./assets/Script/Item/MapSprite":65,"./assets/Script/Class/Message/MessageAction":38,"./assets/Script/Item/CloudItem":66,"./assets/Script/Class/Message/StationInfo":37,"./assets/Script/Class/Message/EndGame":39,"./assets/Script/Class/UI/SettingBtn":40,"./assets/Script/Class/UI/BackGameUse":41,"./assets/Script/Class/UI/StationBtn":42,"./assets/Script/Class/UI/Props_Feature":49,"./assets/Script/Data/base/MusciMng":58,"./assets/Script/Class/UI/Setting":50},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Enum/Commad":56,"../../Data/base/MusciMng":58,"./ManAnimation":28,"../../Data/MyMath":45,"../../Enum/GameEvent":54,"../../Event/EventMng":13,"../../Enum/GameState":64},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{"../Enum/StationType":63,"../Item/MapItem":14,"../Data/base/ComponentBase":12,"../Enum/GameEvent":54,"../Asset/AssetMng":21,"../Item/MapSprite":65,"../GameModle":61},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":57,"../../Enum/GameEvent":54,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"../../Data/base/ComponentBase":12,"./StationBtn":42,"../../Asset/AssetMng":21,"../../GameModle":61,"../../Enum/GameEvent":54,"../../Data/base/MusciMng":58},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{"../Data/base/ComponentBase":12,"../Data/base/ButtonMng":57,"../Enum/GameEvent":54,"../Data/base/MusciMng":58,"../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../Data/base/ComponentBase":12,"../Enum/CameraState":11,"../Enum/GameEvent":54,"../Enum/Easing":52,"../GameModle":61},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Enum/GameEvent":54,"../../Enum/Commad":56,"./Props_Feature":49,"../../Data/base/ButtonMng":57,"../../Data/base/ComponentBase":12,"./BackGameUse":41,"./Setting":50,"./Station":4},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{"./Event/EventMng":13,"./Enum/GameEvent":54,"./Enum/Commad":56},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{"../../Event/EventMng":13},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{"../Data/base/ComponentBase":12,"../Enum/GameEvent":54},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{"./AnimationAsset":5,"./MusicAsset":15,"./SpriteAtlasAsset":22,"./SpriteAsset":20},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{"../Enum/BearState":62,"../Asset/AssetMng":21,"../Data/base/ComponentBase":12,"../GameModle":61,"../Enum/GameState":64},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../Enum/GameEvent":54,"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{"../Asset/AssetMng":21,"../Data/DataCloud":47,"../Enum/GameEvent":54,"../Item/CloudItem":66},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{"../../Data/DataMan":44},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../Data/base/ButtonMng":57,"../Enum/GameEvent":54,"../Data/base/MusciMng":58,"../Data/base/ComponentBase":12,"../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../../Data/base/ButtonMng":57,"../../Data/base/ComponentBase":12,"../../Enum/GameEvent":54,"../../Data/base/MusciMng":58,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":58,"../../Enum/Commad":56,"../../Enum/onClick":55,"../../Enum/GameEvent":54,"../../GameModle":61},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"./Choose_Train":34,"./MessageAction":38,"../../Enum/GameEvent":54,"./EndGame":39,"./StationInfo":37,"./GetProps":36,"./Explain":31,"./QAAnswer":3,"./Choose_Ticket":32,"./Question":35},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ButtonMng":57,"../../Enum/GameEvent":54,"../../Data/base/ComponentBase":12,"../../GameModle":61,"../../Data/base/MusciMng":58,"../../Enum/TrainType":60,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Data/base/ButtonMng":57,"../../Data/base/ComponentBase":12,"../../Enum/GameEvent":54,"../../GameModle":61,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Enum/Commad":56,"../../Data/base/MusciMng":58,"../../Enum/Easing":52,"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":57,"../../Enum/GameEvent":54},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Data/base/ButtonMng":57,"../../Data/base/ComponentBase":12,"../../Enum/GameEvent":54,"../../Enum/Commad":56,"../../Data/base/MusciMng":58},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Enum/Easing":52,"../../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":58,"../../Asset/AssetMng":21,"../../Data/base/ButtonMng":57,"../../Enum/GameEvent":54,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":57,"../../Data/base/MusciMng":58},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{"../../Data/base/ButtonMng":57,"../../Data/base/ComponentBase":12,"../../Enum/GameEvent":54,"../../Data/base/MusciMng":58,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/UI/BackGameUse.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":57,"../../Enum/Commad":56,"../../Asset/AssetMng":21,"../../Enum/GameEvent":54},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{"./base/ComponentBase":12},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{"../../Asset/AssetMng":21,"../../Data/base/ComponentBase":12,"../../Enum/GameEvent":54,"../../Data/base/MusciMng":58,"../../Enum/Commad":56},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Data/base/ComponentBase":12,"./SettingBtn":40},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{"../../Asset/AssetMng":21},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{"./WebPostMessage":10},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{"../Data/base/ButtonMng":57,"../Enum/Commad":56,"../Enum/Easing":52,"../Data/base/ComponentBase":12,"../Enum/GameEvent":54},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{"../Data/base/ComponentBase":12,"../Enum/GameEvent":54},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./Asset/AssetMng":21,"./Class/Mam/Panel_Man":1,"./Class/Panel_Cloud":26,"./Class/Panel_AniPath":24,"./Class/Panel_Map":2,"./Class/CameraControll":7,"./Class/Panel_Door":6,"./Class/UI/Panel_UI":8,"./GameModle":61,"./Data/QA/ChooseLibrary":9,"./Data/base/ComponentBase":12,"./Enum/GameState":64,"./Class/Message/Panel_Message":33,"./Enum/GameEvent":54,"./Class/Panel_Bear":23,"./Data/QA/AnswerLibrary":51,"./Data/QA/QALibrary":48,"./Data/QA/PropsLibrary":53,"./Data/TrainInfoLibrary":46,"./Data/QA/ExplainLibrary":67,"./Class/Panel_Test":29,"./Class/Panel_Version":30,"./Enum/CameraState":11,"./Data/DelayTime":43,"./Class/Panel_Bufer":25,"./Class/Panel_Loading":27,"./Data/base/MusciMng":58},"path":"preview-scripts/assets/Script/GameControll.js"}];
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
    