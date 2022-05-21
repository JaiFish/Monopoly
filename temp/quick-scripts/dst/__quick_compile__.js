
(function () {
var scripts = [{"deps":{"./assets/Script/WebPostMessage":11,"./assets/Script/Asset/AnimationAsset":22,"./assets/Script/Asset/MusicAsset":21,"./assets/Script/Asset/PrefabAsset":7,"./assets/Script/Asset/SpriteAsset":16,"./assets/Script/Asset/SpriteAtlasAsset":18,"./assets/Script/Asset/SpineAsset":24,"./assets/Script/Asset/AssetMng":19,"./assets/Script/Class/Panel_AniPath":23,"./assets/Script/Class/Panel_Bear":25,"./assets/Script/Class/Panel_Bufer":26,"./assets/Script/Class/Panel_Cloud":29,"./assets/Script/Class/Panel_Door":8,"./assets/Script/Class/Panel_Map":1,"./assets/Script/Class/Panel_Test":28,"./assets/Script/Class/Panel_Version":27,"./assets/Script/Class/CameraControll":9,"./assets/Script/Class/Mam/ManAnimation":32,"./assets/Script/Class/Mam/Panel_Man":2,"./assets/Script/Class/Message/Choose_Train":47,"./assets/Script/Class/Message/EndGame":34,"./assets/Script/Class/Message/Explain":31,"./assets/Script/Class/Message/GetProps":33,"./assets/Script/Class/Message/MessageAction":42,"./assets/Script/Class/Message/Panel_Message":41,"./assets/Script/Class/Message/QAAnswer":3,"./assets/Script/Class/Message/Question":45,"./assets/Script/Class/Message/StationInfo":38,"./assets/Script/Class/Message/Choose_Ticket":30,"./assets/Script/Class/UI/Props_Feature":37,"./assets/Script/Class/UI/Setting":39,"./assets/Script/Class/UI/SettingBtn":54,"./assets/Script/Class/UI/Station":4,"./assets/Script/Class/UI/StationBtn":36,"./assets/Script/Class/UI/Panel_UI":10,"./assets/Script/Data/DataMan":44,"./assets/Script/Data/DelayTime":43,"./assets/Script/Data/MyMath":40,"./assets/Script/Data/TrainInfoLibrary":46,"./assets/Script/Data/DataCloud":48,"./assets/Script/Data/QA/AnswerLibrary":52,"./assets/Script/Data/QA/ExplainLibrary":5,"./assets/Script/Data/QA/PropsLibrary":49,"./assets/Script/Data/QA/QALibrary":51,"./assets/Script/Data/QA/ChooseLibrary":13,"./assets/Script/Data/base/MusciMng":12,"./assets/Script/Data/base/ComponentBase":50,"./assets/Script/Data/base/ButtonMng":58,"./assets/Script/Enum/Commad":14,"./assets/Script/Enum/Easing":53,"./assets/Script/Enum/GameEvent":56,"./assets/Script/Enum/GameState":55,"./assets/Script/Enum/StationType":63,"./assets/Script/Enum/TrainType":64,"./assets/Script/Enum/TypeClass":62,"./assets/Script/Enum/onClick":65,"./assets/Script/Enum/CameraState":60,"./assets/Script/Event/EventMng":35,"./assets/Script/GameControll":57,"./assets/Script/Interface/IAsset":17,"./assets/Script/Item/MapItem":15,"./assets/Script/Item/MapSprite":59,"./assets/Script/Item/CloudItem":61,"./assets/Script/ShaderCamera/BuferClass":20,"./assets/Script/GameModle":6},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Asset/AssetMng":19,"../Enum/GameEvent":56,"../Enum/StationType":63,"../Item/MapItem":15,"../Item/MapSprite":59,"../GameModle":6,"../Data/base/ComponentBase":50},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../../Enum/Commad":14,"../../Data/MyMath":40,"../../Enum/GameEvent":56,"../../Enum/GameState":55,"../../Event/EventMng":35,"./ManAnimation":32},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Enum/Commad":14,"../../Enum/GameEvent":56,"../../Data/base/MusciMng":12},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Asset/AssetMng":19,"../../Enum/GameEvent":56,"../../Data/base/MusciMng":12,"./StationBtn":36,"../../GameModle":6},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./WebPostMessage":11},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{"../Data/base/ComponentBase":50,"../Data/base/ButtonMng":58,"../Data/base/MusciMng":12,"../Enum/Commad":14,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../Enum/CameraState":60,"../Enum/Easing":53,"../GameModle":6,"../Data/base/ComponentBase":50,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{"../../Data/base/ComponentBase":50,"../../Data/base/ButtonMng":58,"../../Enum/GameEvent":56,"../../Data/base/MusciMng":12,"../../Enum/Commad":14,"./Props_Feature":37,"./Setting":39,"./Station":4},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{"./Enum/Commad":14,"./Event/EventMng":35,"./Enum/GameEvent":56},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{"../../Asset/AssetMng":19},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{"../Data/base/ComponentBase":50},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{"./AnimationAsset":22,"./MusicAsset":21,"./SpriteAtlasAsset":18,"./SpriteAsset":16},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{"../Enum/GameEvent":56,"../Data/base/ComponentBase":50},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{"../Data/base/ComponentBase":50},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{"../Data/base/ComponentBase":50,"../Asset/AssetMng":19,"../Enum/GameState":55,"../GameModle":6},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../Data/base/ComponentBase":50,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{"../Data/base/ComponentBase":50},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../Data/base/ButtonMng":58,"../Enum/Commad":14,"../Data/base/ComponentBase":50,"../Enum/GameEvent":56,"../Data/base/MusciMng":12},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"../Asset/AssetMng":19,"../Data/DataCloud":48,"../Enum/GameEvent":56,"../Item/CloudItem":61},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../../Enum/Commad":14,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12,"../../Enum/GameEvent":56,"../../Enum/onClick":65,"../../GameModle":6},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"../../Data/base/ComponentBase":50,"../../Data/base/ButtonMng":58,"../../Data/base/MusciMng":12,"../../Enum/Commad":14,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/DataMan":44},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12,"../../Enum/Easing":53,"../../Enum/Commad":14,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":58,"../../Data/base/MusciMng":12,"../../Data/base/ComponentBase":50,"../../Enum/Commad":14,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Enum/Commad":14,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12,"../../Enum/Commad":14,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12,"../../Enum/Commad":14,"../../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12,"./SettingBtn":54},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{"../../Enum/GameEvent":56,"./Choose_Ticket":30,"./Choose_Train":47,"./EndGame":34,"./GetProps":33,"./QAAnswer":3,"./MessageAction":42,"./Explain":31,"./Question":45,"./StationInfo":38},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Data/base/ComponentBase":50,"../../Enum/Easing":53},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{"./base/ComponentBase":50},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/MusciMng":12,"../../Data/base/ComponentBase":50,"../../Enum/Commad":14,"../../Enum/GameEvent":56,"../../GameModle":6},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12,"../../Enum/Commad":14,"../../Enum/GameEvent":56,"../../Enum/TrainType":64,"../../GameModle":6},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"../Data/base/ComponentBase":50},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{"../../Event/EventMng":35},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":50,"../../Data/base/MusciMng":12},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{"./GameModle":6,"./Asset/AssetMng":19,"./Class/Panel_Cloud":29,"./Class/Panel_AniPath":23,"./Class/Panel_Door":8,"./Class/Panel_Map":1,"./Class/Panel_Bear":25,"./Class/Panel_Version":27,"./Class/Panel_Test":28,"./Class/Panel_Bufer":26,"./Class/CameraControll":9,"./Class/Mam/Panel_Man":2,"./Enum/GameState":55,"./Enum/CameraState":60,"./Enum/GameEvent":56,"./Class/UI/Panel_UI":10,"./Class/Message/Panel_Message":41,"./Data/DelayTime":43,"./Data/base/MusciMng":12,"./Data/base/ComponentBase":50,"./Data/QA/QALibrary":51,"./Data/QA/AnswerLibrary":52,"./Data/QA/ExplainLibrary":5,"./Data/QA/PropsLibrary":49,"./Data/QA/ChooseLibrary":13,"./Data/TrainInfoLibrary":46},"path":"preview-scripts/assets/Script/GameControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{"../Data/base/ButtonMng":58,"../Data/base/ComponentBase":50,"../Enum/Easing":53,"../Enum/Commad":14,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{"../Data/base/ComponentBase":50,"../Enum/GameEvent":56},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"}];
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
    