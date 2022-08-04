
(function () {
var scripts = [{"deps":{"./assets/Script/WebPostMessage":10,"./assets/Script/Asset/MusicAsset":64,"./assets/Script/Asset/AssetMng":66,"./assets/Script/Asset/SpineAsset":68,"./assets/Script/Asset/SpriteAsset":67,"./assets/Script/Asset/SpriteAtlasAsset":1,"./assets/Script/Asset/PrefabAsset":17,"./assets/Script/Asset/AnimationAsset":65,"./assets/Script/Class/Panel_AniPath":23,"./assets/Script/Class/Panel_Cloud":27,"./assets/Script/Class/Panel_Map":6,"./assets/Script/Class/Panel_Bufer":11,"./assets/Script/Class/Panel_Door":3,"./assets/Script/Class/Panel_Test":26,"./assets/Script/Class/Panel_Version":22,"./assets/Script/Class/Panel_Bear":20,"./assets/Script/Class/Panel_Loading":21,"./assets/Script/Class/CameraControll":7,"./assets/Script/Class/Mam/ManAnimation":30,"./assets/Script/Class/Mam/Panel_Man":4,"./assets/Script/Class/Message/Choose_Ticket":37,"./assets/Script/Class/Message/CloseFrame":69,"./assets/Script/Class/Message/EndGame":24,"./assets/Script/Class/Message/Explain":28,"./assets/Script/Class/Message/Panel_Message":32,"./assets/Script/Class/Message/QAAnswer":5,"./assets/Script/Class/Message/MessageAction":25,"./assets/Script/Class/Message/StationInfo":33,"./assets/Script/Class/Message/Question":29,"./assets/Script/Class/Message/GetProps":35,"./assets/Script/Class/Message/Choose_Train":31,"./assets/Script/Class/UI/Setting":40,"./assets/Script/Class/UI/Props_Feature":36,"./assets/Script/Class/UI/Station":9,"./assets/Script/Class/UI/SettingBtn":39,"./assets/Script/Class/UI/StationBtn":45,"./assets/Script/Class/UI/Panel_UI":2,"./assets/Script/Class/UI/BackGameUse":34,"./assets/Script/Data/DataMan":41,"./assets/Script/Data/MyMath":42,"./assets/Script/Data/TrainInfoLibrary":43,"./assets/Script/Data/DelayTime":38,"./assets/Script/Data/DataCloud":50,"./assets/Script/Data/QA/ChooseLibrary":53,"./assets/Script/Data/QA/QALibrary":44,"./assets/Script/Data/QA/PropsLibrary":47,"./assets/Script/Data/QA/ExplainLibrary":62,"./assets/Script/Data/QA/AnswerLibrary":8,"./assets/Script/Data/base/MusciMng":58,"./assets/Script/Data/base/ButtonMng":14,"./assets/Script/Data/base/ComponentBase":60,"./assets/Script/Enum/CameraState":57,"./assets/Script/Enum/Commad":55,"./assets/Script/Enum/GameEvent":46,"./assets/Script/Enum/GameState":56,"./assets/Script/Enum/Easing":52,"./assets/Script/Enum/onClick":54,"./assets/Script/Enum/StationType":49,"./assets/Script/Enum/TypeClass":51,"./assets/Script/Enum/TrainType":48,"./assets/Script/Enum/BearState":12,"./assets/Script/GameControll":63,"./assets/Script/Interface/IAsset":16,"./assets/Script/Event/EventMng":13,"./assets/Script/Item/MapSprite":61,"./assets/Script/Item/CloudItem":59,"./assets/Script/Item/MapItem":15,"./assets/Script/ShaderCamera/BuferClass":19,"./assets/Script/GameModle":18},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Enum/Commad":55,"../../Enum/GameEvent":46,"./Setting":40,"../../Data/base/ButtonMng":14,"./Props_Feature":36,"../../Data/base/ComponentBase":60,"./Station":9,"./BackGameUse":34},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{"../Data/base/MusciMng":58,"../Data/base/ComponentBase":60,"../Enum/Commad":55,"../Enum/GameEvent":46,"../Data/base/ButtonMng":14},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Event/EventMng":13,"../../Enum/GameState":56,"../../Data/MyMath":42,"../../Enum/Commad":55,"./ManAnimation":30,"../../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Enum/Commad":55,"../../Data/base/MusciMng":58,"../../Enum/GameEvent":46,"../../Data/base/ButtonMng":14},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"../Enum/StationType":49,"../Enum/GameEvent":46,"../Item/MapItem":15,"../Asset/AssetMng":66,"../Item/MapSprite":61,"../Data/base/ComponentBase":60,"../GameModle":18},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../Enum/GameEvent":46,"../Enum/CameraState":57,"../Enum/Easing":52,"../Data/base/ComponentBase":60,"../GameModle":18},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{"../../Enum/GameEvent":46,"../../Asset/AssetMng":66,"../../Data/base/ComponentBase":60,"./StationBtn":45,"../../GameModle":18,"../../Data/base/MusciMng":58},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{"./Enum/GameEvent":46,"./Enum/Commad":55,"./Event/EventMng":13},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{"../Data/base/ComponentBase":60,"../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{"./WebPostMessage":10},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{"../Enum/GameEvent":46,"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{"../Data/base/ComponentBase":60,"../Asset/AssetMng":66,"../GameModle":18,"../Enum/BearState":12,"../Enum/GameState":56},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../../Enum/GameEvent":46,"../../Data/base/ButtonMng":14,"../../Enum/Commad":55,"../../Asset/AssetMng":66,"../../Data/base/ComponentBase":60,"../../Data/base/MusciMng":58},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Enum/Easing":52},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../Data/base/ComponentBase":60,"../Data/base/MusciMng":58,"../Data/base/ButtonMng":14,"../Enum/Commad":55,"../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"../Enum/GameEvent":46,"../Asset/AssetMng":66,"../Item/CloudItem":59,"../Data/DataCloud":50},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Data/base/ButtonMng":14,"../../Data/base/MusciMng":58,"../../Enum/GameEvent":46,"../../Enum/Commad":55},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Enum/Commad":55,"../../Data/base/ComponentBase":60,"../../Data/base/ButtonMng":14,"../../Enum/GameEvent":46,"../../GameModle":18},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Data/DataMan":41},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Data/base/ComponentBase":60,"../../Enum/TrainType":48,"../../GameModle":18,"../../Asset/AssetMng":66,"../../Enum/Commad":55,"../../Data/base/ButtonMng":14,"../../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"./Choose_Ticket":37,"./Choose_Train":31,"./EndGame":24,"./GetProps":35,"./MessageAction":25,"./CloseFrame":69,"./StationInfo":33,"./QAAnswer":5,"./Explain":28,"./Question":29,"../../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Data/base/ComponentBase":60,"../../Data/base/ButtonMng":14,"../../Enum/Commad":55,"../../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{"../../Data/base/ButtonMng":14,"../../Enum/GameEvent":46,"../../Data/base/ComponentBase":60,"../../Data/base/MusciMng":58,"../../Enum/Commad":55},"path":"preview-scripts/assets/Script/Class/UI/BackGameUse.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Data/base/MusciMng":58,"../../Enum/Easing":52,"../../Enum/GameEvent":46,"../../Enum/Commad":55,"../../Data/base/ButtonMng":14},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Asset/AssetMng":66,"../../Data/base/MusciMng":58,"../../Enum/Commad":55,"../../Enum/GameEvent":46},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Enum/Commad":55,"../../Enum/GameEvent":46,"../../Data/base/MusciMng":58,"../../Enum/onClick":54,"../../GameModle":18},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{"../../Data/base/MusciMng":58,"../../Data/base/ButtonMng":14,"../../Data/base/ComponentBase":60,"../../Asset/AssetMng":66},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{"../../Data/base/ComponentBase":60,"../../Data/base/MusciMng":58,"./SettingBtn":39},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{"./base/ComponentBase":60},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{"../../Enum/Commad":55,"../../Data/base/ButtonMng":14,"../../Data/base/ComponentBase":60,"../../Enum/GameEvent":46,"../../Asset/AssetMng":66},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{"../../Asset/AssetMng":66},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{"../Enum/GameEvent":46,"../Data/base/ComponentBase":60},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{"../../Event/EventMng":13},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{"../Data/base/ComponentBase":60,"../Enum/GameEvent":46,"../Data/base/ButtonMng":14,"../Enum/Easing":52,"../Enum/Commad":55},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./GameModle":18,"./Class/CameraControll":7,"./Class/Panel_Cloud":27,"./Class/Panel_Door":3,"./Class/Panel_Map":6,"./Class/Panel_Bear":20,"./Class/Panel_Version":22,"./Class/Panel_Test":26,"./Class/Panel_Loading":21,"./Class/Panel_AniPath":23,"./Class/Mam/Panel_Man":4,"./Class/Panel_Bufer":11,"./Asset/AssetMng":66,"./Enum/GameState":56,"./Enum/CameraState":57,"./Enum/GameEvent":46,"./Class/UI/Panel_UI":2,"./Class/Message/Panel_Message":32,"./Data/DelayTime":38,"./Data/base/MusciMng":58,"./Data/base/ComponentBase":60,"./Data/QA/QALibrary":44,"./Data/QA/PropsLibrary":47,"./Data/QA/AnswerLibrary":8,"./Data/QA/ExplainLibrary":62,"./Data/QA/ChooseLibrary":53,"./Data/TrainInfoLibrary":43},"path":"preview-scripts/assets/Script/GameControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{"./SpriteAtlasAsset":1,"./MusicAsset":64,"./SpriteAsset":67,"./AnimationAsset":65},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{"../../Enum/Commad":55,"../../Enum/GameEvent":46,"../../Data/base/ComponentBase":60,"../../Data/base/ButtonMng":14},"path":"preview-scripts/assets/Script/Class/Message/CloseFrame.js"}];
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
    