
(function () {
var scripts = [{"deps":{"./assets/Script/WebPostMessage":10,"./assets/Script/Asset/AssetMng":5,"./assets/Script/Asset/MusicAsset":18,"./assets/Script/Asset/PrefabAsset":17,"./assets/Script/Asset/SpineAsset":19,"./assets/Script/Asset/SpriteAsset":23,"./assets/Script/Asset/SpriteAtlasAsset":20,"./assets/Script/Asset/AnimationAsset":21,"./assets/Script/Class/Panel_AniPath":24,"./assets/Script/Class/Panel_Bufer":26,"./assets/Script/Class/Panel_Bear":22,"./assets/Script/Class/Panel_Cloud":25,"./assets/Script/Class/Panel_Loading":28,"./assets/Script/Class/Panel_Door":1,"./assets/Script/Class/Panel_Map":6,"./assets/Script/Class/Panel_Test":31,"./assets/Script/Class/Panel_Version":29,"./assets/Script/Class/CameraControll":7,"./assets/Script/Class/Mam/Panel_Man":2,"./assets/Script/Class/Mam/ManAnimation":27,"./assets/Script/Class/Message/Choose_Train":30,"./assets/Script/Class/Message/EndGame":32,"./assets/Script/Class/Message/GetProps":34,"./assets/Script/Class/Message/Explain":33,"./assets/Script/Class/Message/MessageAction":35,"./assets/Script/Class/Message/QAAnswer":4,"./assets/Script/Class/Message/Panel_Message":36,"./assets/Script/Class/Message/StationInfo":39,"./assets/Script/Class/Message/Question":37,"./assets/Script/Class/Message/Choose_Ticket":38,"./assets/Script/Class/UI/Props_Feature":40,"./assets/Script/Class/UI/Panel_UI":3,"./assets/Script/Class/UI/Setting":41,"./assets/Script/Class/UI/SettingBtn":43,"./assets/Script/Class/UI/Station":8,"./assets/Script/Class/UI/StationBtn":45,"./assets/Script/Class/UI/BackGameUse":46,"./assets/Script/Data/DataCloud":49,"./assets/Script/Data/DelayTime":48,"./assets/Script/Data/MyMath":42,"./assets/Script/Data/TrainInfoLibrary":47,"./assets/Script/Data/DataMan":44,"./assets/Script/Data/QA/ChooseLibrary":9,"./assets/Script/Data/QA/ExplainLibrary":67,"./assets/Script/Data/QA/PropsLibrary":55,"./assets/Script/Data/QA/QALibrary":52,"./assets/Script/Data/QA/AnswerLibrary":54,"./assets/Script/Data/base/ComponentBase":12,"./assets/Script/Data/base/MusciMng":51,"./assets/Script/Data/base/ButtonMng":58,"./assets/Script/Enum/CameraState":11,"./assets/Script/Enum/Commad":53,"./assets/Script/Enum/Easing":50,"./assets/Script/Enum/GameEvent":62,"./assets/Script/Enum/GameState":57,"./assets/Script/Enum/StationType":56,"./assets/Script/Enum/TrainType":59,"./assets/Script/Enum/TypeClass":60,"./assets/Script/Enum/onClick":61,"./assets/Script/Enum/BearState":63,"./assets/Script/Event/EventMng":14,"./assets/Script/GameControll":68,"./assets/Script/Interface/IAsset":13,"./assets/Script/Item/MapItem":65,"./assets/Script/Item/MapSprite":16,"./assets/Script/Item/CloudItem":66,"./assets/Script/ShaderCamera/BuferClass":15,"./assets/Script/GameModle":64},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Data/base/ComponentBase":12,"../Data/base/ButtonMng":58,"../Enum/Commad":53,"../Enum/GameEvent":62,"../Data/base/MusciMng":51},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../../Data/base/MusciMng":51,"../../Data/MyMath":42,"../../Enum/Commad":53,"../../Enum/GameEvent":62,"../../Event/EventMng":14,"./ManAnimation":27,"../../Enum/GameState":57},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Enum/Commad":53,"../../Enum/GameEvent":62,"./BackGameUse":46,"../../Data/base/ButtonMng":58,"./Props_Feature":40,"./Station":8,"../../Data/base/MusciMng":51,"./Setting":41},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"./AnimationAsset":21,"./MusicAsset":18,"./SpriteAsset":23,"./SpriteAtlasAsset":20},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{"../Asset/AssetMng":5,"../Enum/GameEvent":62,"../Enum/StationType":56,"../Item/MapItem":65,"../Data/base/ComponentBase":12,"../Item/MapSprite":16,"../GameModle":64},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../Enum/Easing":50,"../Enum/GameEvent":62,"../Data/base/ComponentBase":12,"../Enum/CameraState":11,"../GameModle":64},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{"../../Asset/AssetMng":5,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/GameEvent":62,"../../GameModle":64,"./StationBtn":45},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{"./Enum/Commad":53,"./Enum/GameEvent":62,"./Event/EventMng":14},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{"../../Event/EventMng":14},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{"../Data/base/ComponentBase":12,"../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{"../Enum/Commad":53,"../Data/base/ButtonMng":58,"../Data/base/ComponentBase":12,"../Enum/Easing":50,"../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{"../Asset/AssetMng":5,"../Data/base/ComponentBase":12,"../Enum/GameState":57,"../Enum/BearState":63,"../GameModle":64},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../Asset/AssetMng":5,"../Data/DataCloud":49,"../Enum/GameEvent":62,"../Item/CloudItem":66},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../Data/base/ComponentBase":12,"../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{"../../Data/DataMan":44},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Asset/AssetMng":5,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/GameEvent":62,"../../Enum/TrainType":59,"../../GameModle":64},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"../Data/base/ButtonMng":58,"../Data/base/ComponentBase":12,"../Data/base/MusciMng":51,"../Enum/Commad":53,"../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"../../Asset/AssetMng":5,"../../Enum/GameEvent":62,"../../Enum/Commad":53,"../../Data/base/MusciMng":51,"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":58},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":58,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/Easing":50,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Enum/Easing":50},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../../Enum/GameEvent":62,"./Choose_Ticket":38,"./Choose_Train":30,"./EndGame":32,"./Explain":33,"./GetProps":34,"./MessageAction":35,"./QAAnswer":4,"./Question":37,"./StationInfo":39},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Data/base/MusciMng":51,"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":12,"../../Enum/Commad":53,"../../GameModle":64,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Data/base/MusciMng":51,"../../Data/base/ComponentBase":12,"../../Enum/Commad":53,"../../Enum/GameEvent":62,"../../Enum/onClick":61,"../../GameModle":64},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Asset/AssetMng":5,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"./SettingBtn":43},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":12,"../../Asset/AssetMng":5,"../../Data/base/MusciMng":51},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{"./base/ComponentBase":12},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{"../../Asset/AssetMng":5,"../../Data/base/ComponentBase":12,"../../Data/base/ButtonMng":58,"../../Enum/Commad":53,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{"../../Data/base/ButtonMng":58,"../../Data/base/ComponentBase":12,"../../Data/base/MusciMng":51,"../../Enum/Commad":53,"../../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Class/UI/BackGameUse.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{"../../Asset/AssetMng":5},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{"./WebPostMessage":10},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{"../Data/base/ComponentBase":12},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{"../Data/base/ComponentBase":12,"../Enum/GameEvent":62},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./GameModle":64,"./Class/CameraControll":7,"./Class/Panel_Cloud":25,"./Class/Panel_Door":1,"./Class/Panel_Map":6,"./Class/Panel_Bear":22,"./Class/Panel_Test":31,"./Class/Panel_Version":29,"./Class/Panel_Bufer":26,"./Class/Panel_Loading":28,"./Class/Panel_AniPath":24,"./Asset/AssetMng":5,"./Class/Mam/Panel_Man":2,"./Enum/GameState":57,"./Enum/CameraState":11,"./Enum/GameEvent":62,"./Class/UI/Panel_UI":3,"./Class/Message/Panel_Message":36,"./Data/DelayTime":48,"./Data/base/MusciMng":51,"./Data/base/ComponentBase":12,"./Data/QA/ChooseLibrary":9,"./Data/QA/AnswerLibrary":54,"./Data/QA/ExplainLibrary":67,"./Data/QA/PropsLibrary":55,"./Data/QA/QALibrary":52,"./Data/TrainInfoLibrary":47},"path":"preview-scripts/assets/Script/GameControll.js"}];
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
    