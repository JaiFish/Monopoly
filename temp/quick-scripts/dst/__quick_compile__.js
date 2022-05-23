
(function () {
var scripts = [{"deps":{"./assets/Script/WebPostMessage":10,"./assets/Script/Asset/AssetMng":19,"./assets/Script/Asset/MusicAsset":7,"./assets/Script/Asset/SpineAsset":18,"./assets/Script/Asset/PrefabAsset":26,"./assets/Script/Asset/SpriteAsset":16,"./assets/Script/Asset/SpriteAtlasAsset":24,"./assets/Script/Asset/AnimationAsset":20,"./assets/Script/Class/Panel_AniPath":28,"./assets/Script/Class/Panel_Bear":22,"./assets/Script/Class/Panel_Bufer":23,"./assets/Script/Class/Panel_Cloud":21,"./assets/Script/Class/Panel_Door":5,"./assets/Script/Class/Panel_Loading":25,"./assets/Script/Class/Panel_Map":1,"./assets/Script/Class/Panel_Test":27,"./assets/Script/Class/Panel_Version":29,"./assets/Script/Class/CameraControll":6,"./assets/Script/Class/Mam/ManAnimation":31,"./assets/Script/Class/Mam/Panel_Man":2,"./assets/Script/Class/Message/Choose_Train":37,"./assets/Script/Class/Message/Explain":30,"./assets/Script/Class/Message/EndGame":32,"./assets/Script/Class/Message/GetProps":35,"./assets/Script/Class/Message/MessageAction":33,"./assets/Script/Class/Message/Panel_Message":36,"./assets/Script/Class/Message/QAAnswer":3,"./assets/Script/Class/Message/Question":34,"./assets/Script/Class/Message/StationInfo":59,"./assets/Script/Class/Message/Choose_Ticket":38,"./assets/Script/Class/UI/Setting":42,"./assets/Script/Class/UI/Props_Feature":39,"./assets/Script/Class/UI/SettingBtn":41,"./assets/Script/Class/UI/Station":4,"./assets/Script/Class/UI/StationBtn":43,"./assets/Script/Class/UI/Panel_UI":8,"./assets/Script/Data/DataMan":40,"./assets/Script/Data/DelayTime":65,"./assets/Script/Data/MyMath":46,"./assets/Script/Data/TrainInfoLibrary":48,"./assets/Script/Data/DataCloud":50,"./assets/Script/Data/QA/PropsLibrary":45,"./assets/Script/Data/QA/ChooseLibrary":9,"./assets/Script/Data/QA/QALibrary":47,"./assets/Script/Data/QA/ExplainLibrary":66,"./assets/Script/Data/QA/AnswerLibrary":44,"./assets/Script/Data/base/ComponentBase":11,"./assets/Script/Data/base/MusciMng":52,"./assets/Script/Data/base/ButtonMng":55,"./assets/Script/Enum/CameraState":12,"./assets/Script/Enum/Easing":53,"./assets/Script/Enum/Commad":49,"./assets/Script/Enum/GameEvent":51,"./assets/Script/Enum/GameState":56,"./assets/Script/Enum/StationType":54,"./assets/Script/Enum/TrainType":64,"./assets/Script/Enum/TypeClass":60,"./assets/Script/Enum/onClick":57,"./assets/Script/Enum/BearState":58,"./assets/Script/Event/EventMng":14,"./assets/Script/GameControll":67,"./assets/Script/Item/MapItem":13,"./assets/Script/Item/MapSprite":61,"./assets/Script/Item/CloudItem":62,"./assets/Script/Interface/IAsset":15,"./assets/Script/ShaderCamera/BuferClass":17,"./assets/Script/GameModle":63},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../Asset/AssetMng":19,"../Enum/GameEvent":51,"../Enum/StationType":54,"../Data/base/ComponentBase":11,"../Item/MapItem":13,"../Item/MapSprite":61,"../GameModle":63},"path":"preview-scripts/assets/Script/Class/Panel_Map.js"},{"deps":{"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51,"../../Data/MyMath":46,"../../Event/EventMng":14,"../../Enum/GameState":56,"./ManAnimation":31},"path":"preview-scripts/assets/Script/Class/Mam/Panel_Man.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":11,"../../Enum/GameEvent":51,"../../Enum/Commad":49},"path":"preview-scripts/assets/Script/Class/Message/QAAnswer.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../GameModle":63,"./StationBtn":43,"../../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/UI/Station.js"},{"deps":{"../Data/base/ButtonMng":55,"../Data/base/MusciMng":52,"../Data/base/ComponentBase":11,"../Enum/Commad":49,"../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Panel_Door.js"},{"deps":{"../GameModle":63,"../Enum/GameEvent":51,"../Enum/CameraState":12,"../Enum/Easing":53,"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Class/CameraControll.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/MusicAsset.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Data/base/ComponentBase":11,"../../Enum/Commad":49,"../../Enum/GameEvent":51,"../../Data/base/MusciMng":52,"./Props_Feature":39,"./Setting":42,"./Station":4},"path":"preview-scripts/assets/Script/Class/UI/Panel_UI.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ChooseLibrary.js"},{"deps":{"./Enum/Commad":49,"./Enum/GameEvent":51,"./Event/EventMng":14},"path":"preview-scripts/assets/Script/WebPostMessage.js"},{"deps":{"../../Event/EventMng":14},"path":"preview-scripts/assets/Script/Data/base/ComponentBase.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/CameraState.js"},{"deps":{"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Item/MapItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/Event/EventMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Interface/IAsset.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAsset.js"},{"deps":{"../Data/base/ComponentBase":11,"../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/ShaderCamera/BuferClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpineAsset.js"},{"deps":{"./MusicAsset":7,"./AnimationAsset":20,"./SpriteAsset":16,"./SpriteAtlasAsset":24},"path":"preview-scripts/assets/Script/Asset/AssetMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/AnimationAsset.js"},{"deps":{"../Asset/AssetMng":19,"../Data/DataCloud":50,"../Enum/GameEvent":51,"../Item/CloudItem":62},"path":"preview-scripts/assets/Script/Class/Panel_Cloud.js"},{"deps":{"../Asset/AssetMng":19,"../Data/base/ComponentBase":11,"../Enum/BearState":58,"../Enum/GameState":56,"../GameModle":63},"path":"preview-scripts/assets/Script/Class/Panel_Bear.js"},{"deps":{"../Data/base/ComponentBase":11,"../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Panel_Bufer.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js"},{"deps":{"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Class/Panel_Loading.js"},{"deps":{},"path":"preview-scripts/assets/Script/Asset/PrefabAsset.js"},{"deps":{"../Data/base/ComponentBase":11,"../Data/base/ButtonMng":55,"../Data/base/MusciMng":52,"../Enum/Commad":49,"../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Panel_Test.js"},{"deps":{"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Class/Panel_AniPath.js"},{"deps":{"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Class/Panel_Version.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Message/Explain.js"},{"deps":{"../../Data/DataMan":40},"path":"preview-scripts/assets/Script/Class/Mam/ManAnimation.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":55,"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Message/EndGame.js"},{"deps":{"../../Data/base/ComponentBase":11,"../../Enum/Easing":53},"path":"preview-scripts/assets/Script/Class/Message/MessageAction.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51,"../../GameModle":63},"path":"preview-scripts/assets/Script/Class/Message/Question.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Data/base/ComponentBase":11,"../../Enum/Easing":53,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Message/GetProps.js"},{"deps":{"../../Enum/GameEvent":51,"./Choose_Ticket":38,"./Explain":30,"./Choose_Train":37,"./GetProps":35,"./EndGame":32,"./QAAnswer":3,"./Question":34,"./MessageAction":33,"./StationInfo":59},"path":"preview-scripts/assets/Script/Class/Message/Panel_Message.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":55,"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":11,"../../Enum/Commad":49,"../../Enum/GameEvent":51,"../../Enum/TrainType":64,"../../GameModle":63},"path":"preview-scripts/assets/Script/Class/Message/Choose_Train.js"},{"deps":{"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51,"../../Enum/onClick":57,"../../GameModle":63},"path":"preview-scripts/assets/Script/Class/Message/Choose_Ticket.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/UI/Props_Feature.js"},{"deps":{"./base/ComponentBase":11},"path":"preview-scripts/assets/Script/Data/DataMan.js"},{"deps":{"../../Asset/AssetMng":19,"../../Data/base/ButtonMng":55,"../../Data/base/MusciMng":52,"../../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Class/UI/SettingBtn.js"},{"deps":{"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"./SettingBtn":41},"path":"preview-scripts/assets/Script/Class/UI/Setting.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Asset/AssetMng":19,"../../Data/base/ComponentBase":11,"../../Enum/GameEvent":51,"../../Enum/Commad":49},"path":"preview-scripts/assets/Script/Class/UI/StationBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/AnswerLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/PropsLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/MyMath.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/QALibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/TrainInfoLibrary.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Commad.js"},{"deps":{"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Data/DataCloud.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameEvent.js"},{"deps":{"../../Asset/AssetMng":19},"path":"preview-scripts/assets/Script/Data/base/MusciMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/Easing.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/StationType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/base/ButtonMng.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/GameState.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/onClick.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/BearState.js"},{"deps":{"../../Data/base/ButtonMng":55,"../../Data/base/ComponentBase":11,"../../Data/base/MusciMng":52,"../../Enum/Commad":49,"../../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Class/Message/StationInfo.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TypeClass.js"},{"deps":{"../Enum/Easing":53,"../Enum/GameEvent":51,"../Enum/Commad":49,"../Data/base/ButtonMng":55,"../Data/base/ComponentBase":11},"path":"preview-scripts/assets/Script/Item/MapSprite.js"},{"deps":{"../Data/base/ComponentBase":11,"../Enum/GameEvent":51},"path":"preview-scripts/assets/Script/Item/CloudItem.js"},{"deps":{"./WebPostMessage":10},"path":"preview-scripts/assets/Script/GameModle.js"},{"deps":{},"path":"preview-scripts/assets/Script/Enum/TrainType.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/DelayTime.js"},{"deps":{},"path":"preview-scripts/assets/Script/Data/QA/ExplainLibrary.js"},{"deps":{"./GameModle":63,"./Class/Panel_AniPath":28,"./Class/Panel_Cloud":21,"./Class/Panel_Door":5,"./Class/Panel_Map":1,"./Class/Panel_Bear":22,"./Class/Panel_Version":29,"./Class/Panel_Bufer":23,"./Class/Panel_Loading":25,"./Class/Mam/Panel_Man":2,"./Class/CameraControll":6,"./Asset/AssetMng":19,"./Enum/GameState":56,"./Enum/CameraState":12,"./Enum/GameEvent":51,"./Class/UI/Panel_UI":8,"./Class/Message/Panel_Message":36,"./Data/DelayTime":65,"./Data/base/MusciMng":52,"./Data/base/ComponentBase":11,"./Data/QA/QALibrary":47,"./Data/QA/AnswerLibrary":44,"./Data/QA/ExplainLibrary":66,"./Data/QA/PropsLibrary":45,"./Data/QA/ChooseLibrary":9,"./Data/TrainInfoLibrary":48},"path":"preview-scripts/assets/Script/GameControll.js"}];
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
    