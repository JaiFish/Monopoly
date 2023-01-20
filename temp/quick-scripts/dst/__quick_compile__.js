
(function () {
var scripts = [{"deps":{"./assets/Script/Data/QA/PropsLibrary":2,"./assets/Script/Enum/Commad":5,"./assets/Script/Event/EventMng":7,"./assets/Script/Interface/IAsset":8,"./assets/Script/Data/DelayTime":11,"./assets/Script/Data/QA/AnswerLibrary":12,"./assets/Script/Data/MyMath":14,"./assets/Script/Data/QA/ChooseLibrary":18,"./assets/Script/Enum/BearState":19,"./assets/Script/Data/QA/QALibrary":20,"./assets/Script/Data/base/ButtonMng":21,"./assets/Script/Enum/GameState":22,"./assets/Script/Enum/TypeClass":23,"./assets/Script/Enum/Easing":24,"./assets/Script/Enum/StationType":25,"./assets/Script/Enum/onClick":26,"./assets/Script/Enum/CameraState":27,"./assets/Script/Enum/TrainType":28,"./assets/Script/Data/TrainInfoLibrary":30,"./assets/Script/Enum/GameEvent":32,"./assets/Script/Data/QA/ExplainLibrary":37,"./assets/Script/Asset/PrefabAsset":40,"./assets/Script/Asset/SpineAsset":41,"./assets/Script/Asset/MusicAsset":43,"./assets/Script/Asset/AnimationAsset":44,"./assets/Script/Asset/SpriteAtlasAsset":45,"./assets/Script/Asset/SpriteAsset":55,"./assets/Script/WebPostMessage":4,"./assets/Script/Data/DataMan":3,"./assets/Script/GameModle":31,"./assets/Script/Item/MapSprite":9,"./assets/Script/ShaderCamera/BuferClass":10,"./assets/Script/Class/Mam/Panel_Man":1,"./assets/Script/Data/DataCloud":15,"./assets/Script/GameControll":39,"./assets/Script/Data/base/MusciMng":6,"./assets/Script/Item/CloudItem":29,"./assets/Script/Item/MapItem":33,"./assets/Script/Class/Panel_Map":34,"./assets/Script/Class/Panel_Door":35,"./assets/Script/Class/CameraControll":36,"./assets/Script/Class/Message/QAAnswer":13,"./assets/Script/Data/base/ComponentBase":17,"./assets/Script/Class/UI/Panel_UI":16,"./assets/Script/Class/UI/Station":38,"./assets/Script/Class/Panel_Bufer":46,"./assets/Script/Class/Panel_AniPath":48,"./assets/Script/Class/Panel_Cloud":47,"./assets/Script/Asset/AssetMng":42,"./assets/Script/Class/Panel_Loading":50,"./assets/Script/Class/Panel_Bear":49,"./assets/Script/Class/Panel_Test":51,"./assets/Script/Class/Panel_Version":58,"./assets/Script/Class/Mam/ManAnimation":53,"./assets/Script/Class/Message/Explain":52,"./assets/Script/Class/Message/MessageAction":56,"./assets/Script/Class/Message/GetProps":54,"./assets/Script/Class/Message/EndGame":57,"./assets/Script/Class/Message/Choose_Ticket":59,"./assets/Script/Class/Message/Question":60,"./assets/Script/Class/Message/Choose_Train":61,"./assets/Script/Class/Message/StationInfo":63,"./assets/Script/Class/UI/Setting":65,"./assets/Script/Class/Message/Panel_Message":62,"./assets/Script/Class/UI/Props_Feature":64,"./assets/Script/Class/UI/SettingBtn":66,"./assets/Script/Class/UI/BackGameUse":67,"./assets/Script/Class/UI/StationBtn":68},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Enum/GameEvent":32,"../../Data/MyMath":14,"../../Data/base/MusciMng":6,"../../Event/EventMng":7,"../../Enum/GameState":22,"./ManAnimation":53,"../../Enum/Commad":5},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{"./base/ComponentBase":17},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{"./Enum/Commad":5,"./Enum/GameEvent":32,"./Event/EventMng":7},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{"../../Asset/AssetMng":42},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{"../Data/base/ButtonMng":21,"../Data/base/ComponentBase":17,"../Enum/Commad":5,"../Enum/GameEvent":32,"../Enum/Easing":24},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{"../Data/base/ComponentBase":17,"../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{"../../Data/base/ButtonMng":21,"../../Data/base/MusciMng":6,"../../Enum/Commad":5,"../../Data/base/ComponentBase":17,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{"../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{"../../Enum/Commad":5,"../../Data/base/ButtonMng":21,"./Setting":65,"../../Data/base/MusciMng":6,"./Props_Feature":64,"./Station":38,"../../Enum/GameEvent":32,"./BackGameUse":67,"../../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{"../../Event/EventMng":7},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{"../Data/base/ComponentBase":17,"../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{"./WebPostMessage":4},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{"../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{"../Asset/AssetMng":42,"../Enum/StationType":25,"../Item/MapItem":33,"../GameModle":31,"../Data/base/ComponentBase":17,"../Enum/GameEvent":32,"../Item/MapSprite":9},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../Data/base/ButtonMng":21,"../Data/base/ComponentBase":17,"../Enum/Commad":5,"../Enum/GameEvent":32,"../Data/base/MusciMng":6},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../Data/base/ComponentBase":17,"../Enum/Easing":24,"../Enum/GameEvent":32,"../GameModle":31,"../Enum/CameraState":27},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"../../Data/base/MusciMng":6,"../../Asset/AssetMng":42,"../../GameModle":31,"../../Enum/GameEvent":32,"../../Data/base/ComponentBase":17,"./StationBtn":68},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{"./Class/CameraControll":36,"./Class/Panel_Cloud":47,"./Asset/AssetMng":42,"./Class/Mam/Panel_Man":1,"./Class/Panel_Map":34,"./GameModle":31,"./Enum/GameEvent":32,"./Class/Message/Panel_Message":62,"./Class/UI/Panel_UI":16,"./Class/Panel_Door":35,"./Class/Panel_Bear":49,"./Enum/GameState":22,"./Data/base/ComponentBase":17,"./Data/QA/ChooseLibrary":18,"./Data/QA/AnswerLibrary":12,"./Data/QA/QALibrary":20,"./Data/TrainInfoLibrary":30,"./Data/QA/PropsLibrary":2,"./Enum/CameraState":27,"./Data/QA/ExplainLibrary":37,"./Class/Panel_AniPath":48,"./Class/Panel_Version":58,"./Class/Panel_Test":51,"./Data/base/MusciMng":6,"./Data/DelayTime":11,"./Class/Panel_Bufer":46,"./Class/Panel_Loading":50},"path":"preview-scripts/assets/Script/GameControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{"./SpriteAsset":55,"./MusicAsset":43,"./SpriteAtlasAsset":45,"./AnimationAsset":44},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{"../Enum/GameEvent":32,"../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{"../Item/CloudItem":29,"../Enum/GameEvent":32,"../Data/DataCloud":15,"../Asset/AssetMng":42},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../GameModle":31,"../Data/base/ComponentBase":17,"../Asset/AssetMng":42,"../Enum/BearState":19,"../Enum/GameState":22},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{"../Data/base/ComponentBase":17,"../Data/base/MusciMng":6,"../Data/base/ButtonMng":21,"../Enum/GameEvent":32,"../Enum/Commad":5},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"../../Data/base/ButtonMng":21,"../../Enum/GameEvent":32,"../../Data/base/MusciMng":6,"../../Data/base/ComponentBase":17,"../../Enum/Commad":5},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/DataMan":3},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../../Data/base/ButtonMng":21,"../../Data/base/ComponentBase":17,"../../Enum/Easing":24,"../../Data/base/MusciMng":6,"../../Enum/Commad":5,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{"../../Data/base/ComponentBase":17,"../../Enum/Easing":24},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../../Asset/AssetMng":42,"../../Data/base/ButtonMng":21,"../../Data/base/ComponentBase":17,"../../Data/base/MusciMng":6,"../../Enum/Commad":5,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../Data/base/ComponentBase":17},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../../Data/base/ComponentBase":17,"../../Data/base/MusciMng":6,"../../Enum/Commad":5,"../../GameModle":31,"../../Enum/onClick":26,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"../../Data/base/ComponentBase":17,"../../Data/base/ButtonMng":21,"../../Data/base/MusciMng":6,"../../GameModle":31,"../../Enum/Commad":5,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Data/base/MusciMng":6,"../../Data/base/ButtonMng":21,"../../Asset/AssetMng":42,"../../Data/base/ComponentBase":17,"../../Enum/Commad":5,"../../Enum/TrainType":28,"../../Enum/GameEvent":32,"../../GameModle":31},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"./Choose_Train":61,"../../Enum/GameEvent":32,"./Choose_Ticket":59,"./EndGame":57,"./GetProps":54,"./MessageAction":56,"./Explain":52,"./StationInfo":63,"./QAAnswer":13,"./Question":60},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Data/base/ButtonMng":21,"../../Data/base/ComponentBase":17,"../../Enum/Commad":5,"../../Data/base/MusciMng":6,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Enum/Commad":5,"../../Asset/AssetMng":42,"../../Enum/GameEvent":32,"../../Data/base/ComponentBase":17,"../../Data/base/MusciMng":6},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"../../Data/base/MusciMng":6,"../../Data/base/ComponentBase":17,"./SettingBtn":66},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{"../../Data/base/ComponentBase":17,"../../Data/base/ButtonMng":21,"../../Data/base/MusciMng":6,"../../Asset/AssetMng":42},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{"../../Data/base/MusciMng":6,"../../Data/base/ButtonMng":21,"../../Enum/GameEvent":32,"../../Data/base/ComponentBase":17,"../../Enum/Commad":5},"path":"preview-scripts/assets/Script/Class/UI/BackGameUse.js"},{"deps":{"../../Asset/AssetMng":42,"../../Data/base/ComponentBase":17,"../../Enum/Commad":5,"../../Data/base/ButtonMng":21,"../../Enum/GameEvent":32},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"}];
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
    