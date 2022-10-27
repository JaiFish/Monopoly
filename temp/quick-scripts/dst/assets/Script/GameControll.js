
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameControll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f03foqAVxMjqFGR1Co9WIA', 'GameControll');
// Script/GameControll.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AssetMng_1 = require("./Asset/AssetMng");
var CameraControll_1 = require("./Class/CameraControll");
var Panel_Man_1 = require("./Class/Mam/Panel_Man");
var Panel_AniPath_1 = require("./Class/Panel_AniPath");
var Panel_Cloud_1 = require("./Class/Panel_Cloud");
var Panel_Door_1 = require("./Class/Panel_Door");
var Panel_Map_1 = require("./Class/Panel_Map");
var GameEvent_1 = require("./Enum/GameEvent");
var GameModle_1 = require("./GameModle");
var Panel_UI_1 = require("./Class/UI/Panel_UI");
var Panel_Message_1 = require("./Class/Message/Panel_Message");
var ComponentBase_1 = require("./Data/base/ComponentBase");
var Panel_Bear_1 = require("./Class/Panel_Bear");
var GameState_1 = require("./Enum/GameState");
var QALibrary_1 = require("./Data/QA/QALibrary");
var ChooseLibrary_1 = require("./Data/QA/ChooseLibrary");
var AnswerLibrary_1 = require("./Data/QA/AnswerLibrary");
var ExplainLibrary_1 = require("./Data/QA/ExplainLibrary");
var TrainInfoLibrary_1 = require("./Data/TrainInfoLibrary");
var PropsLibrary_1 = require("./Data/QA/PropsLibrary");
var CameraState_1 = require("./Enum/CameraState");
var Panel_Version_1 = require("./Class/Panel_Version");
var Panel_Test_1 = require("./Class/Panel_Test");
var DelayTime_1 = require("./Data/DelayTime");
var Panel_Bufer_1 = require("./Class/Panel_Bufer");
var MusciMng_1 = require("./Data/base/MusciMng");
var Panel_Loading_1 = require("./Class/Panel_Loading");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Controll = /** @class */ (function (_super) {
    __extends(Controll, _super);
    function Controll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Controll.prototype.onLoad = function () {
        this.panel_Loading = cc.find("Canvas/Panel_Loading").addComponent(Panel_Loading_1.default);
        this.panel_AniPath = cc.find("Canvas/Panel_AniPath").addComponent(Panel_AniPath_1.default);
        this.panel_Map = cc.find("Canvas/Panel_Map").addComponent(Panel_Map_1.default);
        this.panel_Man = cc.find("Canvas/Panel_Man").addComponent(Panel_Man_1.default);
        this.cameraControll = cc.find("Canvas/MainCamera").addComponent(CameraControll_1.default);
        this.panel_Door = cc.find("Canvas/Panel_Door").addComponent(Panel_Door_1.default);
        this.panel_Cloud = cc.find("Canvas/Panel_Cloud").addComponent(Panel_Cloud_1.default);
        this.panel_UI = cc.find("Canvas/Panel_UI").addComponent(Panel_UI_1.default);
        this.panel_Bear = cc.find("Canvas/Panel_Bear").addComponent(Panel_Bear_1.default);
        this.panel_Bufer = cc.find("Canvas/Panel_Bufer").addComponent(Panel_Bufer_1.default);
        this.panel_Message = cc.find("Canvas/Panel_Message").addComponent(Panel_Message_1.default);
        this.panel_Version = cc.find("Canvas/Panel_Version").addComponent(Panel_Version_1.default);
        this.panel_Test = cc.find("Canvas/Panel_Test").addComponent(Panel_Test_1.default);
        if (CC_DEV)
            this.panel_Test.show();
        else
            this.panel_Test.hide();
        this.initEvent(GameEvent_1.GameEvent.SendModel, this.sendModle);
        this.initEvent(GameEvent_1.GameEvent.SendCommand, this.sendCommand);
        this.initEvent(GameEvent_1.GameEvent.GetStation, this.changeStationSprite);
        AssetMng_1.default.startLoad();
        fcc.configMgr
            .setFrameWorkDebug(false)
            .build();
        var updateTime = cc.sys.os == cc.sys.OS_IOS ? 500 : 100;
        fcc.sceneMgr.sceneDirection = fcc.type.SceneDirectionType.LANDSCAPE;
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(updateTime);
    };
    Controll.prototype.start = function () {
        var data = new postCmd();
        data.cmd = "StartLoading";
        //@ts-ignore
        data.isRotated = cc.view._isRotated;
        GameModle_1.default.webPostMessage.send(data);
        MusciMng_1.default.init();
        this.panel_Version.setVersion(GameModle_1.default.version);
        this.sendModle(GameEvent_1.GameEvent.InitMap);
        this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
        GameModle_1.default.gameState = GameState_1.GameState.Wait;
        GameModle_1.default.webPostMessage.connect();
        this.panel_Message.node.opacity = 255;
        this.panel_Door.reset();
        this.checkData();
    };
    Controll.prototype.sendModle = function (type) {
        switch (type) {
            case GameEvent_1.GameEvent.InitMap:
                this.EventEmit(type, this.panel_AniPath.TWPath);
                break;
            case GameEvent_1.GameEvent.BearSetModle:
            case GameEvent_1.GameEvent.SetModel:
                this.EventEmit(type, GameModle_1.default);
                break;
        }
        // this.EventEmit(type)
    };
    Controll.prototype.changeStationSprite = function (_number) {
        if (_number < 2 || _number > 19)
            return;
        var _class = GameModle_1.default.mapSprite.get(_number);
        if (_class.isGet)
            return;
        _class.mySprite.spriteFrame = AssetMng_1.default.data_SprtieAtlas.get("Station_" + _number.toString());
        _class.getAction();
    };
    Controll.prototype.sendCommand = function (type) {
        var any = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            any[_i - 1] = arguments[_i];
        }
        this[type].apply(this, any);
    };
    /**
     * 流程
     */
    Controll.prototype.checkData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log("初始化檢查資料");
                        GameModle_1.default.isEndLoadingData = false;
                        this.panel_Loading.show();
                        //Test
                        return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        //Test
                        _a.sent();
                        // this.doorAgainGame()
                        GameModle_1.default.isEndLoadingData = true;
                        this.panel_Loading.Actionhide();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.mainInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Version.node.active = false;
                        MusciMng_1.default.effectPlay("DoorOpen");
                        return [4 /*yield*/, this.panel_Door.openDoor()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.scaleAction()];
                    case 2:
                        _a.sent();
                        MusciMng_1.default.effectPlay("maneyMixSound");
                        return [4 /*yield*/, this.cameraControll.showAllView()];
                    case 3:
                        _a.sent();
                        MusciMng_1.default.musicPlay("gameBG");
                        return [4 /*yield*/, new DelayTime_1.MyDelay().setDelay(0.5)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cameraControll.moveToManCamera()
                            // this.panel_Man.nowStation = 20
                            // GameModle.playData.level = 0 
                            // GameModle.playData.trainTypeNumber = 0
                            // GameModle.playData.trainType = TrainType.Type0
                            // this.endChoosTrain()
                            // return
                        ];
                    case 5:
                        _a.sent();
                        // this.panel_Man.nowStation = 20
                        // GameModle.playData.level = 0 
                        // GameModle.playData.trainTypeNumber = 0
                        // GameModle.playData.trainType = TrainType.Type0
                        // this.endChoosTrain()
                        // return
                        this.panel_Man.manState = GameState_1.GameState.ShowMessage;
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 6:
                        _a.sent();
                        this.panel_Message.choose_Ticket.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.endChooseTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GameModle_1.default.qaIndex = 0;
                GameModle_1.default.qaLibrary = new QALibrary_1.default(GameModle_1.default.playData.level, 3);
                GameModle_1.default.chooseLibrary = new ChooseLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                GameModle_1.default.answerLibrary = new AnswerLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                GameModle_1.default.explainLibrary = new ExplainLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                // console.log("QA題庫：" + GameModle.qaLibrary.qaLib_str);
                // console.log("選向：" + GameModle.chooseLibrary.chooseLib);
                // console.log("問答：" + GameModle.answerLibrary.answerLib_str);
                // console.log("祥解：" + GameModle.explainLibrary.explainLib);
                this.panel_Message.choose_Ticket.hide();
                this.panel_Message.choose_Train.initTrainSprite();
                this.panel_Message.choose_Train.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endChoosTrain = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AssetMng_1.default.bearAsset(GameModle_1.default.playData.trainTypeNumber);
                        return [4 /*yield*/, new DelayTime_1.MyDelay().setDelay(2)];
                    case 1:
                        _a.sent();
                        this.panel_Man.setManSprite(AssetMng_1.default.data_SprtieAtlas.get(GameModle_1.default.playData.trainType));
                        this.panel_Man.resetOeg();
                        this.panel_Bear.init();
                        // await this.panel_Message.choose_Train.getTrainAciton()
                        this.panel_Message.choose_Train.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 2:
                        _a.sent();
                        this.panel_Man.manState = GameState_1.GameState.Wait;
                        this.showTeaching();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showTeaching = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_UI.show();
                this.panel_UI.openTeaching();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endTeaching = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GameModle_1.default.gameState = GameState_1.GameState.Start;
                // this.panel_UI.station.chengeSprit()
                this.panel_UI.setBtnEvent();
                this.cameraControll.activeManCamera(true);
                this.cameraControll.activeMineCamera(false);
                this.panel_UI.props_Feature.setStart_Stop(true);
                this.panel_Man.manGO();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.waitSignalLight = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_UI.props_Feature.setStart_Stop(false);
                        if (this.panel_Man.isWaitSingnalLinght)
                            return [2 /*return*/];
                        // if (this.panel_Man.manState == GameState.WaitSignalLight) return;
                        // this.panel_Man.manState = GameState.WaitSignalLight
                        this.panel_Man.manStop();
                        return [4 /*yield*/, this.panel_Bear.checkState()];
                    case 1:
                        _a.sent();
                        this.panel_UI.props_Feature.setStart_Stop(true);
                        this.panel_Man.manEndSignalLight();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, getKid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GameModle_1.default.isVideoEnd = true;
                        this.panel_Man.manState = GameState_1.GameState.ShowMessage;
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        data = new postCmd();
                        if (this.panel_UI.setting.itemMap.get(0).nowState) { //暫時這樣寫在另想好方法，指引到SettingBtn
                            MusciMng_1.default.swichEffect();
                            MusciMng_1.default.swichMusic();
                        }
                        switch (this.panel_Man.nowStation) {
                            case 1:
                                data.cmd = "OpenView";
                                data.viewType = 1;
                                data.kid = false;
                                GameModle_1.default.webPostMessage.send(data);
                                // console.log("播放安全影片");
                                break;
                            case 20:
                                getKid = GameModle_1.default.playData.level == 0 ? true : false;
                                data.cmd = "OpenView";
                                data.viewType = 2;
                                data.kid = getKid;
                                GameModle_1.default.webPostMessage.send(data);
                                // console.log("播放廉政影片");
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.closeVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!GameModle_1.default.isVideoEnd)
                            return [2 /*return*/];
                        GameModle_1.default.isVideoEnd = false;
                        if (this.panel_UI.setting.itemMap.get(0).nowState) { //暫時這樣寫在另想好方法，指引到SettingBtn
                            MusciMng_1.default.swichEffect();
                            MusciMng_1.default.swichMusic();
                        }
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        this.panel_Man.manState = GameState_1.GameState.Wait;
                        this.panel_UI.props_Feature.setStart_Stop(true);
                        this.panel_Man.manGO();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showQA = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getQA, getChooese;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getQA = "";
                        getChooese = "";
                        getQA = GameModle_1.default.qaLibrary.qaLib_str[GameModle_1.default.qaIndex];
                        getChooese = GameModle_1.default.chooseLibrary.chooseLib[GameModle_1.default.qaIndex];
                        this.panel_Message.question.reset();
                        this.panel_Message.question.setQAInfo(getQA, GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num[GameModle_1.default.qaIndex]);
                        this.panel_Message.question.setChoose(getChooese);
                        this.panel_Man.manState = GameState_1.GameState.ShowMessage;
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        this.panel_Message.question.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showAgainQA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.qaAnswer.hide();
                this.panel_Message.question.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endQA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.question.hide();
                this.showAnswer();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getAnswer;
            return __generator(this, function (_a) {
                getAnswer = "";
                getAnswer = GameModle_1.default.answerLibrary.answerLib_str[GameModle_1.default.qaIndex].substring(0, 1);
                this.panel_Message.qaAnswer.reset();
                if (GameModle_1.default.chooseAnswer == getAnswer) {
                    MusciMng_1.default.effectPlay("True");
                    this.panel_Message.qaAnswer.trueAnswer();
                }
                else {
                    this.panel_Message.qaAnswer.falseAnswer();
                    MusciMng_1.default.effectPlay("False");
                }
                this.panel_Message.qaAnswer.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.qaAnswer.hide();
                this.showGetProps();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showExplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.qaAnswer.hide();
                this.panel_Message.explain.setInfoStr(GameModle_1.default.explainLibrary.explainLib[GameModle_1.default.qaIndex]);
                this.panel_Message.explain.show();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endExplain = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.explain.hide();
                this.showGetProps();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.showStationInfo = function (select) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.panel_Man.manState == GameState_1.GameState.ShowMessage)
                            return [2 /*return*/];
                        if (select == 5 || select == 11 || select == 15)
                            return [2 /*return*/];
                        if (this.panel_Man.manState != GameState_1.GameState.Wait)
                            this.panel_Man.manLineWait();
                        this.panel_Man.manState = GameState_1.GameState.ShowMessage;
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        this.panel_Message.stationInfo.setTrainName(TrainInfoLibrary_1.default.getName(select));
                        this.panel_Message.stationInfo.setSprite(AssetMng_1.default.data_SprtieAtlas.get("StationInfo_" + select.toString()));
                        this.panel_Message.stationInfo.setInfo(TrainInfoLibrary_1.default.getInfo(select));
                        this.panel_Message.stationInfo.show();
                        "";
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.endTationInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.stationInfo.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        this.panel_Man.manState = GameState_1.GameState.Wait;
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showGetProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Message.getProps.setData(PropsLibrary_1.default.lib.get(this.panel_Man.nowStation), AssetMng_1.default.data_SprtieAtlas.get("GetProps_" + this.panel_Man.nowStation.toString()));
                this.panel_Message.getProps.show();
                this.panel_UI.props_Feature.getProps(this.panel_Man.nowStation);
                MusciMng_1.default.effectPlay("GetProps");
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endGetProps = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.getProps.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        this.panel_Man.manState = GameState_1.GameState.Wait;
                        GameModle_1.default.qaIndex++; //+兩個地方是因為玩家會有分支，因此在分支的末端加1Index
                        this.panel_UI.props_Feature.setStart_Stop(true);
                        this.panel_Man.manGO();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showEndGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Man.manStop();
                        this.panel_Man.manState = GameState_1.GameState.ShowMessage;
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 2:
                        _a.sent();
                        this.panel_Message.endGame.playBearSprite(GameModle_1.default.playData.trainTypeNumber);
                        this.panel_Message.endGame.show();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.closeEndGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Message.endGame.hide();
                        return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
                        this.panel_Man.manState = GameState_1.GameState.Wait;
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.againGame = function () {
        this.closeEndGame();
        cc.director.loadScene("GameSence");
        MusciMng_1.default.musicStop();
        MusciMng_1.default.effectAllStop();
    };
    Controll.prototype.goLottery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeEndGame();
                        MusciMng_1.default.effectPlay("maneyMixSound");
                        return [4 /*yield*/, this.cameraControll.showAllView()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.backScaleAction()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.closeDoor()];
                    case 3:
                        _a.sent();
                        this.panel_Loading.show();
                        this.panel_Loading.startLoading();
                        MusciMng_1.default.musicStop();
                        MusciMng_1.default.effectAllStop();
                        //活動結束拔除
                        // let data = new postCmd()
                        // data.cmd = "OpenView"
                        // data.viewType = -1
                        // data.kid = false
                        // GameModle.webPostMessage.send(data)
                        setTimeout(function () {
                            _this.doorAgainGame(); //穰遊戲整個重新，因為現在要跟網頁合作關係所以做法改變    
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.endToBackGame = function () {
        this.closeEndGame();
        this.panel_Man.node.active = false;
        this.cameraControll.activeMineCamera(true);
        this.cameraControll.activeManCamera(false);
        this.cameraControll.moveToStation(GameModle_1.default.mapItem.get(0).node);
        this.panel_UI.show();
        this.panel_UI.props_Feature.hide();
        this.panel_UI.setbtnEvent_Again();
        this.panel_UI.backGameUse.show();
    };
    Controll.prototype.doorAgainGame = function () {
        cc.director.loadScene("GameSence");
    };
    Controll.prototype.menGo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.cameraControll.cameraState != CameraState_1.CameraState.Men)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cameraControll.moveToManCamera(0.3)];
                    case 1:
                        _a.sent();
                        this.panel_Man.manGO();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.manSkip = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.cameraControll.cameraState != CameraState_1.CameraState.Men)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cameraControll.moveToManCamera(0.3)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.panel_Man.manSkip();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.manWait = function () {
        this.panel_Man.manWait();
    };
    Controll.prototype.manLineWait = function () {
        this.panel_Man.manLineWait();
    };
    Controll.prototype.moveTarget = function (select) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.panel_Man.manState != GameState_1.GameState.Wait) {
                            this.panel_UI.props_Feature.setStart_Stop(false);
                            this.panel_Man.manLineWait();
                        }
                        this.panel_Message.stationInfo.reset();
                        this.cameraControll.activeManCamera(false);
                        this.cameraControll.activeMineCamera(true);
                        return [4 /*yield*/, this.cameraControll.moveToStation(GameModle_1.default.mapItem.get(select).node)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.updataUIStart = function (setBoolea) {
        this.panel_UI.props_Feature.setStart_Stop(setBoolea);
    };
    Controll.prototype.clinetClickStart_Stop = function () {
        MusciMng_1.default.effectPlay("BtnClick");
        if (this.panel_Man.isWaitSingnalLinght)
            return;
        this.panel_UI.props_Feature.setStart_Stop();
        //正在走
        if (!this.panel_UI.props_Feature.isGo)
            this.panel_Man.manWait();
        else {
            this.panel_Man.manGO();
            this.menGo();
        }
    };
    Controll.prototype.showAllView = function () {
        this.cameraControll.activeManCamera(false);
        this.cameraControll.activeMineCamera(true);
        this.panel_Message.hide();
        this.cameraControll.showAllView();
    };
    Controll.prototype.webCheckData = function () {
        if (GameModle_1.default.isEndLoadingData) {
            GameModle_1.default.isEndLoadingData = false; //避免重複敲
            var data = new postCmd();
            data.cmd = 'Close';
            //@ts-ignore
            GameModle_1.default.webPostMessage.send(data);
            //開始遊戲
            this.mainInit();
        }
    };
    //音樂的處理
    Controll.prototype.lateUpdate = function () {
        //@ts-ignore
        var context = cc.sys.__audioSupport.context;
        if (context.state === 'suspended') {
            context.resume();
            // console.log(context.state);
        }
    };
    Controll.prototype.update = function (dt) {
        // console.log(cc.audioEngine.getState(MusciMng.musicID));
        // console.log(cc.audioEngine.getState(MusciMng.effectID.get('DoorOpen')));
        // console.log("正在播放嗎?" + cc.audioEngine.isMusicPlaying());
        // cc.find("Panel_長寬測試/視窗").getComponent(cc.Label).string = "寬：" + cc.view.getDesignResolutionSize().width + "\n高：" + cc.view.getDesignResolutionSize().height
        //@ts-ignore
        // cc.find("Panel_長寬測試/旋轉").getComponent(cc.Label).string = cc.view._isRotated.toString()
        // cc.game.
    };
    Controll = __decorate([
        ccclass
    ], Controll);
    return Controll;
}(ComponentBase_1.default));
exports.default = Controll;
var postCmd = /** @class */ (function () {
    function postCmd() {
    }
    return postCmd;
}());

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGlEQUE0QztBQUU1Qyw4Q0FBMkM7QUFDM0MsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFJNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWE7SUFBbkQ7O0lBOGRBLENBQUM7SUE3Y0cseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3JFLElB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QUNJLElBQUksbUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM1QixtQkFBUyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQSxDQUFDLE9BQU87WUFFMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtZQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQTtZQUNsQixZQUFZO1lBQ1osbUJBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25DLE1BQU07WUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDbEI7SUFFTCxDQUFDO0lBQ0QsT0FBTztJQUNBLDZCQUFVLEdBQWpCO1FBQ0ksWUFBWTtRQUNaLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQiw4QkFBOEI7U0FDakM7SUFDTCxDQUFDO0lBQ1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QiwwREFBMEQ7UUFDMUQsMkVBQTJFO1FBQzNFLDJEQUEyRDtRQUUzRCw4SkFBOEo7UUFDOUosWUFBWTtRQUNaLHlGQUF5RjtRQUN6RixXQUFXO0lBQ2YsQ0FBQztJQTNkZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThkNUI7SUFBRCxlQUFDO0NBOWRELEFBOGRDLENBOWRxQyx1QkFBYSxHQThkbEQ7a0JBOWRvQixRQUFRO0FBZ2U3QjtJQUFBO0lBS0EsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldE1uZyBmcm9tIFwiLi9Bc3NldC9Bc3NldE1uZ1wiO1xyXG5pbXBvcnQgQ2FtZXJhQ29udHJvbGwgZnJvbSBcIi4vQ2xhc3MvQ2FtZXJhQ29udHJvbGxcIjtcclxuaW1wb3J0IFBhbmVsX01hbiBmcm9tIFwiLi9DbGFzcy9NYW0vUGFuZWxfTWFuXCI7XHJcbmltcG9ydCBQYW5lbF9BbmlQYXRoIGZyb20gXCIuL0NsYXNzL1BhbmVsX0FuaVBhdGhcIjtcclxuaW1wb3J0IFBhbmVsX0Nsb3VkIGZyb20gXCIuL0NsYXNzL1BhbmVsX0Nsb3VkXCI7XHJcbmltcG9ydCBQYW5lbF9Eb29yIGZyb20gXCIuL0NsYXNzL1BhbmVsX0Rvb3JcIjtcclxuaW1wb3J0IFBhbmVsX01hcCBmcm9tIFwiLi9DbGFzcy9QYW5lbF9NYXBcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4vRW51bS9HYW1lRXZlbnRcIjtcclxuaW1wb3J0IEdhbWVNb2RsZSBmcm9tIFwiLi9HYW1lTW9kbGVcIjtcclxuaW1wb3J0IFBhbmVsX1VJIGZyb20gXCIuL0NsYXNzL1VJL1BhbmVsX1VJXCI7XHJcbmltcG9ydCBQYW5lbF9NZXNzYWdlIGZyb20gXCIuL0NsYXNzL01lc3NhZ2UvUGFuZWxfTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50QmFzZSBmcm9tIFwiLi9EYXRhL2Jhc2UvQ29tcG9uZW50QmFzZVwiO1xyXG5pbXBvcnQgeyBDb21tYW1uZCB9IGZyb20gXCIuL0VudW0vQ29tbWFkXCI7XHJcbmltcG9ydCBQYW5lbF9CZWFyIGZyb20gXCIuL0NsYXNzL1BhbmVsX0JlYXJcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vRW51bS9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IFFBTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL1FBTGlicmFyeVwiO1xyXG5pbXBvcnQgQ2hvb3NlTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Nob29zZUxpYnJhcnlcIjtcclxuaW1wb3J0IEFuc3dlckxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9BbnN3ZXJMaWJyYXJ5XCI7XHJcbmltcG9ydCBFeHBsYWluTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0V4cGxhaW5MaWJyYXJ5XCI7XHJcbmltcG9ydCBUcmFpbkluZm9MaWJyYXJ5IGZyb20gXCIuL0RhdGEvVHJhaW5JbmZvTGlicmFyeVwiO1xyXG5pbXBvcnQgUHJvcHNMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUHJvcHNMaWJyYXJ5XCI7XHJcbmltcG9ydCB7IENhbWVyYVN0YXRlIH0gZnJvbSBcIi4vRW51bS9DYW1lcmFTdGF0ZVwiO1xyXG5pbXBvcnQgUGFuZWxfVmVyc2lvbiBmcm9tIFwiLi9DbGFzcy9QYW5lbF9WZXJzaW9uXCI7XHJcbmltcG9ydCBQYW5lbF9UZXN0IGZyb20gXCIuL0NsYXNzL1BhbmVsX1Rlc3RcIjtcclxuaW1wb3J0IHsgVHJhaW5UeXBlIH0gZnJvbSBcIi4vRW51bS9UcmFpblR5cGVcIjtcclxuaW1wb3J0IHsgTXlEZWxheSB9IGZyb20gXCIuL0RhdGEvRGVsYXlUaW1lXCI7XHJcbmltcG9ydCBQYW5lbF9CdWZlciBmcm9tIFwiLi9DbGFzcy9QYW5lbF9CdWZlclwiO1xyXG5pbXBvcnQgTXVzY2lNbmcgZnJvbSBcIi4vRGF0YS9iYXNlL011c2NpTW5nXCI7XHJcbmltcG9ydCBQYW5lbF9Mb2FkaW5nIGZyb20gXCIuL0NsYXNzL1BhbmVsX0xvYWRpbmdcIjtcclxuaW1wb3J0IEVuZEdhbWUgZnJvbSBcIi4vQ2xhc3MvTWVzc2FnZS9FbmRHYW1lXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgcGFuZWxfQW5pUGF0aDogUGFuZWxfQW5pUGF0aDtcclxuICAgIHBhbmVsX01hcDogUGFuZWxfTWFwO1xyXG4gICAgcGFuZWxfTWFuOiBQYW5lbF9NYW47XHJcbiAgICBjYW1lcmFDb250cm9sbDogQ2FtZXJhQ29udHJvbGw7XHJcbiAgICBwYW5lbF9Eb29yOiBQYW5lbF9Eb29yO1xyXG4gICAgcGFuZWxfQ2xvdWQ6IFBhbmVsX0Nsb3VkO1xyXG4gICAgcGFuZWxfVUk6IFBhbmVsX1VJO1xyXG4gICAgcGFuZWxfTWVzc2FnZTogUGFuZWxfTWVzc2FnZVxyXG4gICAgcGFuZWxfQmVhcjogUGFuZWxfQmVhclxyXG4gICAgcGFuZWxfVmVyc2lvbjogUGFuZWxfVmVyc2lvblxyXG4gICAgcGFuZWxfVGVzdDogUGFuZWxfVGVzdFxyXG4gICAgcGFuZWxfQnVmZXI6IFBhbmVsX0J1ZmVyXHJcbiAgICBwYW5lbF9Mb2FkaW5nOiBQYW5lbF9Mb2FkaW5nXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9Mb2FkaW5nID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9Mb2FkaW5nXCIpLmFkZENvbXBvbmVudChQYW5lbF9Mb2FkaW5nKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0FuaVBhdGggPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0FuaVBhdGhcIikuYWRkQ29tcG9uZW50KFBhbmVsX0FuaVBhdGgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFwID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYXBcIikuYWRkQ29tcG9uZW50KFBhbmVsX01hcCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4gPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01hblwiKS5hZGRDb21wb25lbnQoUGFuZWxfTWFuKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsID0gY2MuZmluZChcIkNhbnZhcy9NYWluQ2FtZXJhXCIpLmFkZENvbXBvbmVudChDYW1lcmFDb250cm9sbCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9Eb29yXCIpLmFkZENvbXBvbmVudChQYW5lbF9Eb29yKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0Nsb3VkID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9DbG91ZFwiKS5hZGRDb21wb25lbnQoUGFuZWxfQ2xvdWQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1VJXCIpLmFkZENvbXBvbmVudChQYW5lbF9VSSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9CZWFyID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9CZWFyXCIpLmFkZENvbXBvbmVudChQYW5lbF9CZWFyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0J1ZmVyID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9CdWZlclwiKS5hZGRDb21wb25lbnQoUGFuZWxfQnVmZXIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZSA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTWVzc2FnZVwiKS5hZGRDb21wb25lbnQoUGFuZWxfTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9WZXJzaW9uID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9WZXJzaW9uXCIpLmFkZENvbXBvbmVudChQYW5lbF9WZXJzaW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9UZXN0ID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9UZXN0XCIpLmFkZENvbXBvbmVudChQYW5lbF9UZXN0KTtcclxuICAgICAgICBpZiAoQ0NfREVWKVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX1Rlc3Quc2hvdygpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX1Rlc3QuaGlkZSgpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2VuZE1vZGVsLCB0aGlzLnNlbmRNb2RsZSlcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIHRoaXMuc2VuZENvbW1hbmQpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkdldFN0YXRpb24sIHRoaXMuY2hhbmdlU3RhdGlvblNwcml0ZSlcclxuXHJcbiAgICAgICAgQXNzZXRNbmcuc3RhcnRMb2FkKCk7XHJcblxyXG4gICAgICAgIGZjYy5jb25maWdNZ3JcclxuICAgICAgICAgICAgLnNldEZyYW1lV29ya0RlYnVnKGZhbHNlKVxyXG4gICAgICAgICAgICAuYnVpbGQoKVxyXG4gICAgICAgIGxldCB1cGRhdGVUaW1lID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgPyA1MDAgOiAxMDBcclxuICAgICAgICBmY2Muc2NlbmVNZ3Iuc2NlbmVEaXJlY3Rpb24gPSBmY2MudHlwZS5TY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIodXBkYXRlVGltZSlcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBkYXRhLmNtZCA9IFwiU3RhcnRMb2FkaW5nXCJcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBkYXRhLmlzUm90YXRlZCA9IGNjLnZpZXcuX2lzUm90YXRlZFxyXG4gICAgICAgIEdhbWVNb2RsZS53ZWJQb3N0TWVzc2FnZS5zZW5kKGRhdGEpXHJcblxyXG4gICAgICAgIE11c2NpTW5nLmluaXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbi5zZXRWZXJzaW9uKEdhbWVNb2RsZS52ZXJzaW9uKTtcclxuICAgICAgICB0aGlzLnNlbmRNb2RsZShHYW1lRXZlbnQuSW5pdE1hcCk7XHJcbiAgICAgICAgdGhpcy5FdmVudEVtaXQoR2FtZUV2ZW50LkNsb3NlQnVmZXIpXHJcbiAgICAgICAgR2FtZU1vZGxlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLmNvbm5lY3QoKVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uubm9kZS5vcGFjaXR5ID0gMjU1XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfRG9vci5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5jaGVja0RhdGEoKVxyXG4gICAgfVxyXG4gICAgc2VuZE1vZGxlKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5Jbml0TWFwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQodHlwZSwgdGhpcy5wYW5lbF9BbmlQYXRoLlRXUGF0aCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lRXZlbnQuQmVhclNldE1vZGxlOlxyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5TZXRNb2RlbDpcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KHR5cGUsIEdhbWVNb2RsZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5FdmVudEVtaXQodHlwZSlcclxuICAgIH1cclxuICAgIGNoYW5nZVN0YXRpb25TcHJpdGUoX251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKF9udW1iZXIgPCAyIHx8IF9udW1iZXIgPiAxOSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBfY2xhc3MgPSBHYW1lTW9kbGUubWFwU3ByaXRlLmdldChfbnVtYmVyKVxyXG4gICAgICAgIGlmIChfY2xhc3MuaXNHZXQpIHJldHVybjtcclxuICAgICAgICBfY2xhc3MubXlTcHJpdGUuc3ByaXRlRnJhbWUgPSBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIlN0YXRpb25fXCIgKyBfbnVtYmVyLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgX2NsYXNzLmdldEFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2VuZENvbW1hbmQodHlwZTogQ29tbWFtbmQsIC4uLmFueTogYW55W10pIHtcclxuICAgICAgICB0aGlzW3R5cGVdKC4uLmFueSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rWB56iLXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNoZWNrRGF0YSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWIneWni+WMluaqouafpeizh+aWmVwiKTtcclxuXHJcbiAgICAgICAgR2FtZU1vZGxlLmlzRW5kTG9hZGluZ0RhdGEgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGFuZWxfTG9hZGluZy5zaG93KClcclxuICAgICAgICAvL1Rlc3RcclxuICAgICAgICBhd2FpdCBBc3NldE1uZy5jaGVja1N0YXRlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5kb29yQWdhaW5HYW1lKClcclxuICAgICAgICBHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSA9IHRydWVcclxuICAgICAgICB0aGlzLnBhbmVsX0xvYWRpbmcuQWN0aW9uaGlkZSgpXHJcbiAgICB9XHJcbiAgICBhc3luYyBtYWluSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24ubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJEb29yT3BlblwiKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfRG9vci5vcGVuRG9vcigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLnNjYWxlQWN0aW9uKClcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwibWFuZXlNaXhTb3VuZFwiKVxyXG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwuc2hvd0FsbFZpZXcoKVxyXG4gICAgICAgIE11c2NpTW5nLm11c2ljUGxheShcImdhbWVCR1wiKVxyXG4gICAgICAgIGF3YWl0IG5ldyBNeURlbGF5KCkuc2V0RGVsYXkoMC41KVxyXG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvTWFuQ2FtZXJhKClcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24gPSAyMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDAgXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZU51bWJlciA9IDBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlID0gVHJhaW5UeXBlLlR5cGUwXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc1RyYWluKClcclxuICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RpY2tldC5zaG93KClcclxuXHJcbiAgICAgICAgLy90ZXN0XHJcbiAgICAgICAgLy8gdGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbiA9IDIwXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMVxyXG4gICAgICAgIC8vIHRoaXMuZW5kQ2hvb3NlVGlja2V0KClcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zaG93UUEoKVxyXG4gICAgICAgIC8vIHRoaXMuc2hvd0dldFByb3BzKClcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uc2hvdygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRDaG9vc2VUaWNrZXQoKSB7XHJcbiAgICAgICAgR2FtZU1vZGxlLnFhSW5kZXggPSAwXHJcbiAgICAgICAgR2FtZU1vZGxlLnFhTGlicmFyeSA9IG5ldyBRQUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCAzKTtcclxuICAgICAgICBHYW1lTW9kbGUuY2hvb3NlTGlicmFyeSA9IG5ldyBDaG9vc2VMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkgPSBuZXcgQW5zd2VyTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG4gICAgICAgIEdhbWVNb2RsZS5leHBsYWluTGlicmFyeSA9IG5ldyBFeHBsYWluTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlFB6aGM5bqr77yaXCIgKyBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLpgbjlkJHvvJpcIiArIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLllY/nrZTvvJpcIiArIEdhbWVNb2RsZS5hbnN3ZXJMaWJyYXJ5LmFuc3dlckxpYl9zdHIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi56Wl6Kej77yaXCIgKyBHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkuZXhwbGFpbkxpYik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UaWNrZXQuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5pbml0VHJhaW5TcHJpdGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVHJhaW4uc2hvdygpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQ2hvb3NUcmFpbigpIHtcclxuICAgICAgICBBc3NldE1uZy5iZWFyQXNzZXQoR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZU51bWJlcilcclxuICAgICAgICBhd2FpdCBuZXcgTXlEZWxheSgpLnNldERlbGF5KDIpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLnNldE1hblNwcml0ZShBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlKSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5yZXNldE9lZygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9CZWFyLmluaXQoKVxyXG4gICAgICAgIC8vIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVHJhaW4uZ2V0VHJhaW5BY2l0b24oKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVHJhaW4uaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLldhaXRcclxuICAgICAgICB0aGlzLnNob3dUZWFjaGluZygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93VGVhY2hpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5zaG93KClcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLm9wZW5UZWFjaGluZygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRUZWFjaGluZygpIHtcclxuICAgICAgICBHYW1lTW9kbGUuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN0YXJ0O1xyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfVUkuc3RhdGlvbi5jaGVuZ2VTcHJpdCgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5zZXRCdG5FdmVudCgpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNaW5lQ2FtZXJhKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHdhaXRTaWduYWxMaWdodCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcChmYWxzZSlcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4uaXNXYWl0U2luZ25hbExpbmdodCkgcmV0dXJuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID09IEdhbWVTdGF0ZS5XYWl0U2lnbmFsTGlnaHQpIHJldHVybjtcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0U2lnbmFsTGlnaHRcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RvcCgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9CZWFyLmNoZWNrU3RhdGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHRydWUpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuRW5kU2lnbmFsTGlnaHQoKVxyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dWaWRlbygpIHtcclxuICAgICAgICBHYW1lTW9kbGUuaXNWaWRlb0VuZCA9IHRydWVcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgcG9zdENtZCgpXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfVUkuc2V0dGluZy5pdGVtTWFwLmdldCgwKS5ub3dTdGF0ZSkgey8v5pqr5pmC6YCZ5qij5a+r5Zyo5Y+m5oOz5aW95pa55rOV77yM5oyH5byV5YiwU2V0dGluZ0J0blxyXG4gICAgICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgICAgIE11c2NpTW5nLnN3aWNoTXVzaWMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICBkYXRhLmtpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmkq3mlL7lronlhajlvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdldEtpZCA9IEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS52aWV3VHlwZSA9IDJcclxuICAgICAgICAgICAgICAgIGRhdGEua2lkID0gZ2V0S2lkO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pKt5pS+5buJ5pS/5b2x54mHXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZVZpZGVvKCk7XHJcbiAgICAgICAgLy8gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7fSwgXCIqXCIpXHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZVZpZGVvKCkge1xyXG4gICAgICAgIGlmICghR2FtZU1vZGxlLmlzVmlkZW9FbmQpIHJldHVybjtcclxuICAgICAgICBHYW1lTW9kbGUuaXNWaWRlb0VuZCA9IGZhbHNlXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfVUkuc2V0dGluZy5pdGVtTWFwLmdldCgwKS5ub3dTdGF0ZSkgey8v5pqr5pmC6YCZ5qij5a+r5Zyo5Y+m5oOz5aW95pa55rOV77yM5oyH5byV5YiwU2V0dGluZ0J0blxyXG4gICAgICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgICAgIE11c2NpTW5nLnN3aWNoTXVzaWMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLldhaXRcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dRQSgpIHtcclxuICAgICAgICBsZXQgZ2V0UUEgPSBcIlwiXHJcbiAgICAgICAgbGV0IGdldENob29lc2UgPSBcIlwiXHJcblxyXG4gICAgICAgIGdldFFBID0gR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9zdHJbR2FtZU1vZGxlLnFhSW5kZXhdXHJcbiAgICAgICAgZ2V0Q2hvb2VzZSA9IEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYltHYW1lTW9kbGUucWFJbmRleF1cclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnF1ZXN0aW9uLnJlc2V0KClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uc2V0UUFJbmZvKGdldFFBLCBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtW0dhbWVNb2RsZS5xYUluZGV4XSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uc2V0Q2hvb3NlKGdldENob29lc2UpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuU2hvd01lc3NhZ2VcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QWdhaW5RQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRRQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Fuc3dlcigpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCBnZXRBbnN3ZXIgPSBcIlwiXHJcbiAgICAgICAgZ2V0QW5zd2VyID0gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF0uc3Vic3RyaW5nKDAsIDEpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnJlc2V0KClcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmNob29zZUFuc3dlciA9PSBnZXRBbnN3ZXIpIHtcclxuICAgICAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIlRydWVcIilcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnRydWVBbnN3ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmZhbHNlQW5zd2VyKClcclxuICAgICAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkZhbHNlXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQW5zd2VyKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFeHBsYWluKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2V0SW5mb1N0cihHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkuZXhwbGFpbkxpYltHYW1lTW9kbGUucWFJbmRleF0pO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5leHBsYWluLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEV4cGxhaW4oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0dldFByb3BzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2hvd1N0YXRpb25JbmZvKHNlbGVjdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID09IEdhbWVTdGF0ZS5TaG93TWVzc2FnZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHNlbGVjdCA9PSA1IHx8IHNlbGVjdCA9PSAxMSB8fCBzZWxlY3QgPT0gMTUpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSAhPSBHYW1lU3RhdGUuV2FpdClcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldFRyYWluTmFtZShUcmFpbkluZm9MaWJyYXJ5LmdldE5hbWUoc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0U3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbkluZm9fXCIgKyBzZWxlY3QudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldEluZm8oVHJhaW5JbmZvTGlicmFyeS5nZXRJbmZvKHNlbGVjdCkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNob3coKTsgYGBcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFRhdGlvbkluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLmhpZGUoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLldhaXRcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93R2V0UHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmdldFByb3BzLnNldERhdGEoXHJcbiAgICAgICAgICAgIFByb3BzTGlicmFyeS5saWIuZ2V0KHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pLFxyXG4gICAgICAgICAgICBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkdldFByb3BzX1wiICsgdGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbi50b1N0cmluZygpKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuc2hvdygpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5nZXRQcm9wcyh0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJHZXRQcm9wc1wiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kR2V0UHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmdldFByb3BzLmhpZGUoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIEdhbWVNb2RsZS5xYUluZGV4KysvLyvlhanlgIvlnLDmlrnmmK/lm6DngrrnjqnlrrbmnIPmnInliIbmlK/vvIzlm6DmraTlnKjliIbmlK/nmoTmnKvnq6/liqAxSW5kZXhcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93RW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdG9wKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5wbGF5QmVhclNwcml0ZShHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZUVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICB9XHJcbiAgICBhZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgICAgICBNdXNjaU1uZy5tdXNpY1N0b3AoKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdEFsbFN0b3AoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdvTG90dGVyeSgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRW5kR2FtZSgpXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIm1hbmV5TWl4U291bmRcIilcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmJhY2tTY2FsZUFjdGlvbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmNsb3NlRG9vcigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9Mb2FkaW5nLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTG9hZGluZy5zdGFydExvYWRpbmcoKVxyXG4gICAgICAgIE11c2NpTW5nLm11c2ljU3RvcCgpXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0QWxsU3RvcCgpXHJcbiAgICAgICAgLy/mtLvli5XntZDmnZ/mi5TpmaRcclxuICAgICAgICAvLyBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICAvLyBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgIC8vIGRhdGEudmlld1R5cGUgPSAtMVxyXG4gICAgICAgIC8vIGRhdGEua2lkID0gZmFsc2VcclxuICAgICAgICAvLyBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kb29yQWdhaW5HYW1lKCkvL+epsOmBiuaIsuaVtOWAi+mHjeaWsO+8jOWboOeCuuePvuWcqOimgei3n+e2sumggeWQiOS9nOmXnOS/guaJgOS7peWBmuazleaUueiuiiAgICBcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumBiuaIsue1kOadn1Nob3fmir3njY7oiIfllY/nrZRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVuZFRvQmFja0dhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1pbmVDYW1lcmEodHJ1ZSlcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1hbkNhbWVyYShmYWxzZSlcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb1N0YXRpb24oR2FtZU1vZGxlLm1hcEl0ZW0uZ2V0KDApLm5vZGUpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5zaG93KClcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5zZXRidG5FdmVudF9BZ2FpbigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5iYWNrR2FtZVVzZS5zaG93KClcclxuICAgIH1cclxuICAgIGRvb3JBZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNlbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbWVuR28oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhQ29udHJvbGwuY2FtZXJhU3RhdGUgIT0gQ2FtZXJhU3RhdGUuTWVuKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvTWFuQ2FtZXJhKDAuMylcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuR08oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG1hblNraXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhQ29udHJvbGwuY2FtZXJhU3RhdGUgIT0gQ2FtZXJhU3RhdGUuTWVuKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvTWFuQ2FtZXJhKDAuMylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU2tpcCgpXHJcbiAgICB9XHJcblxyXG4gICAgbWFuV2FpdCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5XYWl0KClcclxuICAgIH1cclxuICAgIG1hbkxpbmVXYWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuICAgIH1cclxuICAgIGFzeW5jIG1vdmVUYXJnZXQoc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgIT0gR2FtZVN0YXRlLldhaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5zdGF0aW9uSW5mby5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYSh0cnVlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb1N0YXRpb24oR2FtZU1vZGxlLm1hcEl0ZW0uZ2V0KHNlbGVjdCkubm9kZSlcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGFVSVN0YXJ0KHNldEJvb2xlYTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHNldEJvb2xlYSlcclxuICAgIH1cclxuICAgIGNsaW5ldENsaWNrU3RhcnRfU3RvcCgpIHtcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiQnRuQ2xpY2tcIilcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLmlzV2FpdFNpbmduYWxMaW5naHQpIHJldHVyblxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKClcclxuICAgICAgICAvL+ato+WcqOi1sFxyXG4gICAgICAgIGlmICghdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLmlzR28pXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbldhaXQoKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICAgICAgICAgIHRoaXMubWVuR28oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dBbGxWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1pbmVDYW1lcmEodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuc2hvd0FsbFZpZXcoKTtcclxuICAgIH1cclxuICAgIHdlYkNoZWNrRGF0YSgpIHtcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmlzRW5kTG9hZGluZ0RhdGEpIHtcclxuICAgICAgICAgICAgR2FtZU1vZGxlLmlzRW5kTG9hZGluZ0RhdGEgPSBmYWxzZSAvL+mBv+WFjemHjeikh+aVslxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgcG9zdENtZCgpXHJcbiAgICAgICAgICAgIGRhdGEuY21kID0gJ0Nsb3NlJ1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgLy/plovlp4vpgYrmiLJcclxuICAgICAgICAgICAgdGhpcy5tYWluSW5pdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8v6Z+z5qiC55qE6JmV55CGXHJcbiAgICBwdWJsaWMgbGF0ZVVwZGF0ZSgpIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBsZXQgY29udGV4dCA9IGNjLnN5cy5fX2F1ZGlvU3VwcG9ydC5jb250ZXh0O1xyXG4gICAgICAgIGlmIChjb250ZXh0LnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xyXG4gICAgICAgICAgICBjb250ZXh0LnJlc3VtZSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0LnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShNdXNjaU1uZy5tdXNpY0lEKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUoTXVzY2lNbmcuZWZmZWN0SUQuZ2V0KCdEb29yT3BlbicpKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmraPlnKjmkq3mlL7ll44/XCIgKyBjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKTtcclxuXHJcbiAgICAgICAgLy8gY2MuZmluZChcIlBhbmVsX+mVt+WvrOa4rOippi/oppbnqpdcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuWvrO+8mlwiICsgY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoICsgXCJcXG7pq5jvvJpcIiArIGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHRcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAvLyBjYy5maW5kKFwiUGFuZWxf6ZW35a+s5ris6KmmL+aXi+i9iVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnZpZXcuX2lzUm90YXRlZC50b1N0cmluZygpXHJcbiAgICAgICAgLy8gY2MuZ2FtZS5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5jbGFzcyBwb3N0Q21kIHtcclxuICAgIGNtZDogc3RyaW5nXHJcbiAgICB2aWV3VHlwZTogbnVtYmVyXHJcbiAgICBraWQ6IGJvb2xlYW5cclxuICAgIGlzUm90YXRlZDogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbiJdfQ==