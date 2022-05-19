
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Asset/AnimationAsset');
require('./assets/Script/Asset/AssetMng');
require('./assets/Script/Asset/MusicAsset');
require('./assets/Script/Asset/PrefabAsset');
require('./assets/Script/Asset/SpineAsset');
require('./assets/Script/Asset/SpriteAsset');
require('./assets/Script/Asset/SpriteAtlasAsset');
require('./assets/Script/Class/CameraControll');
require('./assets/Script/Class/Mam/ManAnimation');
require('./assets/Script/Class/Mam/Panel_Man');
require('./assets/Script/Class/Message/Choose_Ticket');
require('./assets/Script/Class/Message/Choose_Train');
require('./assets/Script/Class/Message/EndGame');
require('./assets/Script/Class/Message/Explain');
require('./assets/Script/Class/Message/GetProps');
require('./assets/Script/Class/Message/MessageAction');
require('./assets/Script/Class/Message/Panel_Message');
require('./assets/Script/Class/Message/QAAnswer');
require('./assets/Script/Class/Message/Question');
require('./assets/Script/Class/Message/StationInfo');
require('./assets/Script/Class/Panel_AniPath');
require('./assets/Script/Class/Panel_Bear');
require('./assets/Script/Class/Panel_Bufer');
require('./assets/Script/Class/Panel_Cloud');
require('./assets/Script/Class/Panel_Door');
require('./assets/Script/Class/Panel_Map');
require('./assets/Script/Class/Panel_Teaching');
require('./assets/Script/Class/Panel_Test');
require('./assets/Script/Class/Panel_Version');
require('./assets/Script/Class/UI/Panel_UI');
require('./assets/Script/Class/UI/Props_Feature');
require('./assets/Script/Class/UI/Setting');
require('./assets/Script/Class/UI/SettingBtn');
require('./assets/Script/Class/UI/Station');
require('./assets/Script/Class/UI/StationBtn');
require('./assets/Script/Data/DataCloud');
require('./assets/Script/Data/DataMan');
require('./assets/Script/Data/DelayTime');
require('./assets/Script/Data/MyMath');
require('./assets/Script/Data/QA/AnswerLibrary');
require('./assets/Script/Data/QA/ChooseLibrary');
require('./assets/Script/Data/QA/ExplainLibrary');
require('./assets/Script/Data/QA/PropsLibrary');
require('./assets/Script/Data/QA/QALibrary');
require('./assets/Script/Data/TrainInfoLibrary');
require('./assets/Script/Data/base/ButtonMng');
require('./assets/Script/Data/base/ComponentBase');
require('./assets/Script/Data/base/MusciMng');
require('./assets/Script/Enum/CameraState');
require('./assets/Script/Enum/Commad');
require('./assets/Script/Enum/Easing');
require('./assets/Script/Enum/GameEvent');
require('./assets/Script/Enum/GameState');
require('./assets/Script/Enum/StationType');
require('./assets/Script/Enum/TrainType');
require('./assets/Script/Enum/TypeClass');
require('./assets/Script/Enum/onClick');
require('./assets/Script/Event/EventMng');
require('./assets/Script/GameControll');
require('./assets/Script/GameModle');
require('./assets/Script/Interface/IAsset');
require('./assets/Script/Item/CloudItem');
require('./assets/Script/Item/MapItem');
require('./assets/Script/Item/MapSprite');
require('./assets/Script/ShaderCamera/BuferClass');
require('./assets/Script/WebPostMessage');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();