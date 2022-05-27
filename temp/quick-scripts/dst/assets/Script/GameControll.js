
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
        // if (CC_DEV)
        //     this.panel_Test.show()
        // else
        //     this.panel_Test.hide()
        this.initEvent(GameEvent_1.GameEvent.SendModel, this.sendModle);
        this.initEvent(GameEvent_1.GameEvent.SendCommand, this.sendCommand);
        this.initEvent(GameEvent_1.GameEvent.GetStation, this.changeStationSprite);
        AssetMng_1.default.startLoad();
        fcc.configMgr
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
                        this.doorAgainGame();
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
            var data;
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
                        MusciMng_1.default.musicStop();
                        MusciMng_1.default.effectAllStop();
                        data = new postCmd();
                        data.cmd = "OpenView";
                        data.viewType = -1;
                        data.kid = false;
                        GameModle_1.default.webPostMessage.send(data);
                        this.doorAgainGame(); //穰遊戲整個重新，因為現在要跟網頁合作關係所以做法改變
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGlEQUE0QztBQUU1Qyw4Q0FBMkM7QUFDM0MsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFJNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWE7SUFBbkQ7O0lBK2NBLENBQUM7SUE5YkcseUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3JFLElB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WUFDL0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLDhCQUE4QjtTQUNqQztJQUNMLENBQUM7SUFDUyx5QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLDBEQUEwRDtRQUMxRCwyRUFBMkU7UUFDM0UsMkRBQTJEO1FBRTNELDhKQUE4SjtRQUM5SixZQUFZO1FBQ1oseUZBQXlGO1FBQ3pGLFdBQVc7SUFDZixDQUFDO0lBNWNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK2M1QjtJQUFELGVBQUM7Q0EvY0QsQUErY0MsQ0EvY3FDLHVCQUFhLEdBK2NsRDtrQkEvY29CLFFBQVE7QUFpZDdCO0lBQUE7SUFLQSxDQUFDO0lBQUQsY0FBQztBQUFELENBTEEsQUFLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuL0Fzc2V0L0Fzc2V0TW5nXCI7XHJcbmltcG9ydCBDYW1lcmFDb250cm9sbCBmcm9tIFwiLi9DbGFzcy9DYW1lcmFDb250cm9sbFwiO1xyXG5pbXBvcnQgUGFuZWxfTWFuIGZyb20gXCIuL0NsYXNzL01hbS9QYW5lbF9NYW5cIjtcclxuaW1wb3J0IFBhbmVsX0FuaVBhdGggZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQW5pUGF0aFwiO1xyXG5pbXBvcnQgUGFuZWxfQ2xvdWQgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQ2xvdWRcIjtcclxuaW1wb3J0IFBhbmVsX0Rvb3IgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfRG9vclwiO1xyXG5pbXBvcnQgUGFuZWxfTWFwIGZyb20gXCIuL0NsYXNzL1BhbmVsX01hcFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuL0dhbWVNb2RsZVwiO1xyXG5pbXBvcnQgUGFuZWxfVUkgZnJvbSBcIi4vQ2xhc3MvVUkvUGFuZWxfVUlcIjtcclxuaW1wb3J0IFBhbmVsX01lc3NhZ2UgZnJvbSBcIi4vQ2xhc3MvTWVzc2FnZS9QYW5lbF9NZXNzYWdlXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IFBhbmVsX0JlYXIgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQmVhclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgQW5zd2VyTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Fuc3dlckxpYnJhcnlcIjtcclxuaW1wb3J0IEV4cGxhaW5MaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvRXhwbGFpbkxpYnJhcnlcIjtcclxuaW1wb3J0IFRyYWluSW5mb0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9UcmFpbkluZm9MaWJyYXJ5XCI7XHJcbmltcG9ydCBQcm9wc0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9Qcm9wc0xpYnJhcnlcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0NhbWVyYVN0YXRlXCI7XHJcbmltcG9ydCBQYW5lbF9WZXJzaW9uIGZyb20gXCIuL0NsYXNzL1BhbmVsX1ZlcnNpb25cIjtcclxuaW1wb3J0IFBhbmVsX1Rlc3QgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfVGVzdFwiO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tIFwiLi9FbnVtL1RyYWluVHlwZVwiO1xyXG5pbXBvcnQgeyBNeURlbGF5IH0gZnJvbSBcIi4vRGF0YS9EZWxheVRpbWVcIjtcclxuaW1wb3J0IFBhbmVsX0J1ZmVyIGZyb20gXCIuL0NsYXNzL1BhbmVsX0J1ZmVyXCI7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tIFwiLi9EYXRhL2Jhc2UvTXVzY2lNbmdcIjtcclxuaW1wb3J0IFBhbmVsX0xvYWRpbmcgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfTG9hZGluZ1wiO1xyXG5pbXBvcnQgRW5kR2FtZSBmcm9tIFwiLi9DbGFzcy9NZXNzYWdlL0VuZEdhbWVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGwgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICBwYW5lbF9BbmlQYXRoOiBQYW5lbF9BbmlQYXRoO1xyXG4gICAgcGFuZWxfTWFwOiBQYW5lbF9NYXA7XHJcbiAgICBwYW5lbF9NYW46IFBhbmVsX01hbjtcclxuICAgIGNhbWVyYUNvbnRyb2xsOiBDYW1lcmFDb250cm9sbDtcclxuICAgIHBhbmVsX0Rvb3I6IFBhbmVsX0Rvb3I7XHJcbiAgICBwYW5lbF9DbG91ZDogUGFuZWxfQ2xvdWQ7XHJcbiAgICBwYW5lbF9VSTogUGFuZWxfVUk7XHJcbiAgICBwYW5lbF9NZXNzYWdlOiBQYW5lbF9NZXNzYWdlXHJcbiAgICBwYW5lbF9CZWFyOiBQYW5lbF9CZWFyXHJcbiAgICBwYW5lbF9WZXJzaW9uOiBQYW5lbF9WZXJzaW9uXHJcbiAgICBwYW5lbF9UZXN0OiBQYW5lbF9UZXN0XHJcbiAgICBwYW5lbF9CdWZlcjogUGFuZWxfQnVmZXJcclxuICAgIHBhbmVsX0xvYWRpbmc6IFBhbmVsX0xvYWRpbmdcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX0xvYWRpbmcgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0xvYWRpbmdcIikuYWRkQ29tcG9uZW50KFBhbmVsX0xvYWRpbmcpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfQW5pUGF0aCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQW5pUGF0aFwiKS5hZGRDb21wb25lbnQoUGFuZWxfQW5pUGF0aCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYXAgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01hcFwiKS5hZGRDb21wb25lbnQoUGFuZWxfTWFwKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbiA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTWFuXCIpLmFkZENvbXBvbmVudChQYW5lbF9NYW4pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwgPSBjYy5maW5kKFwiQ2FudmFzL01haW5DYW1lcmFcIikuYWRkQ29tcG9uZW50KENhbWVyYUNvbnRyb2xsKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0Rvb3IgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0Rvb3JcIikuYWRkQ29tcG9uZW50KFBhbmVsX0Rvb3IpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfQ2xvdWQgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0Nsb3VkXCIpLmFkZENvbXBvbmVudChQYW5lbF9DbG91ZCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSSA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVUlcIikuYWRkQ29tcG9uZW50KFBhbmVsX1VJKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0JlYXIgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0JlYXJcIikuYWRkQ29tcG9uZW50KFBhbmVsX0JlYXIpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfQnVmZXIgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0J1ZmVyXCIpLmFkZENvbXBvbmVudChQYW5lbF9CdWZlcik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NZXNzYWdlXCIpLmFkZENvbXBvbmVudChQYW5lbF9NZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24gPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1ZlcnNpb25cIikuYWRkQ29tcG9uZW50KFBhbmVsX1ZlcnNpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX1Rlc3QgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1Rlc3RcIikuYWRkQ29tcG9uZW50KFBhbmVsX1Rlc3QpO1xyXG4gICAgICAgIC8vIGlmIChDQ19ERVYpXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGFuZWxfVGVzdC5zaG93KClcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgLy8gICAgIHRoaXMucGFuZWxfVGVzdC5oaWRlKClcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kTW9kZWwsIHRoaXMuc2VuZE1vZGxlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgdGhpcy5zZW5kQ29tbWFuZClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuR2V0U3RhdGlvbiwgdGhpcy5jaGFuZ2VTdGF0aW9uU3ByaXRlKVxyXG5cclxuICAgICAgICBBc3NldE1uZy5zdGFydExvYWQoKTtcclxuXHJcbiAgICAgICAgZmNjLmNvbmZpZ01nclxyXG4gICAgICAgICAgICAuYnVpbGQoKVxyXG4gICAgICAgIGxldCB1cGRhdGVUaW1lID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgPyA1MDAgOiAxMDBcclxuICAgICAgICBmY2Muc2NlbmVNZ3Iuc2NlbmVEaXJlY3Rpb24gPSBmY2MudHlwZS5TY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIodXBkYXRlVGltZSlcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IHBvc3RDbWQoKVxyXG4gICAgICAgIGRhdGEuY21kID0gXCJTdGFydExvYWRpbmdcIlxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGRhdGEuaXNSb3RhdGVkID0gY2Mudmlldy5faXNSb3RhdGVkXHJcbiAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuXHJcbiAgICAgICAgTXVzY2lNbmcuaW5pdCgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9WZXJzaW9uLnNldFZlcnNpb24oR2FtZU1vZGxlLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMuc2VuZE1vZGxlKEdhbWVFdmVudC5Jbml0TWFwKTtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuQ2xvc2VCdWZlcilcclxuICAgICAgICBHYW1lTW9kbGUuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLldhaXRcclxuICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2UuY29ubmVjdCgpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5ub2RlLm9wYWNpdHkgPSAyNTVcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yLnJlc2V0KClcclxuICAgICAgICB0aGlzLmNoZWNrRGF0YSgpXHJcbiAgICB9XHJcbiAgICBzZW5kTW9kbGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkluaXRNYXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdCh0eXBlLCB0aGlzLnBhbmVsX0FuaVBhdGguVFdQYXRoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CZWFyU2V0TW9kbGU6XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LlNldE1vZGVsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQodHlwZSwgR2FtZU1vZGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkV2ZW50RW1pdCh0eXBlKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGlvblNwcml0ZShfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoX251bWJlciA8IDIgfHwgX251bWJlciA+IDE5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IEdhbWVNb2RsZS5tYXBTcHJpdGUuZ2V0KF9udW1iZXIpXHJcbiAgICAgICAgaWYgKF9jbGFzcy5pc0dldCkgcmV0dXJuO1xyXG4gICAgICAgIF9jbGFzcy5teVNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9cIiArIF9udW1iZXIudG9TdHJpbmcoKSlcclxuICAgICAgICBfY2xhc3MuZ2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZW5kQ29tbWFuZCh0eXBlOiBDb21tYW1uZCwgLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0oLi4uYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqItcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2hlY2tEYXRhKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5qqi5p+l6LOH5paZXCIpO1xyXG5cclxuICAgICAgICBHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5wYW5lbF9Mb2FkaW5nLnNob3coKVxyXG4gICAgICAgIC8vVGVzdFxyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmRvb3JBZ2FpbkdhbWUoKVxyXG4gICAgICAgIEdhbWVNb2RsZS5pc0VuZExvYWRpbmdEYXRhID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMucGFuZWxfTG9hZGluZy5BY3Rpb25oaWRlKClcclxuICAgIH1cclxuICAgIGFzeW5jIG1haW5Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkRvb3JPcGVuXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLm9wZW5Eb29yKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3Iuc2NhbGVBY3Rpb24oKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJtYW5leU1peFNvdW5kXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgTXVzY2lNbmcubXVzaWNQbGF5KFwiZ2FtZUJHXCIpXHJcbiAgICAgICAgYXdhaXQgbmV3IE15RGVsYXkoKS5zZXREZWxheSgwLjUpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5tb3ZlVG9NYW5DYW1lcmEoKVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbiA9IDIwXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMCBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyID0gMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUgPSBUcmFpblR5cGUuVHlwZTBcclxuICAgICAgICAvLyB0aGlzLmVuZENob29zVHJhaW4oKVxyXG4gICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVGlja2V0LnNob3coKVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uID0gMjBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAxXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc2VUaWNrZXQoKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dRQSgpXHJcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0UHJvcHMoKVxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZENob29zZVRpY2tldCgpIHtcclxuICAgICAgICBHYW1lTW9kbGUucWFJbmRleCA9IDBcclxuICAgICAgICBHYW1lTW9kbGUucWFMaWJyYXJ5ID0gbmV3IFFBTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIDMpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5ID0gbmV3IENob29zZUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeSA9IG5ldyBBbnN3ZXJMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5ID0gbmV3IEV4cGxhaW5MaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUUHpoYzluqvvvJpcIiArIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfc3RyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumBuOWQke+8mlwiICsgR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWVj+etlO+8mlwiICsgR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnpaXop6PvvJpcIiArIEdhbWVNb2RsZS5leHBsYWluTGlicmFyeS5leHBsYWluTGliKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RpY2tldC5oaWRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmluaXRUcmFpblNwcml0ZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5zaG93KClcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRDaG9vc1RyYWluKCkge1xyXG4gICAgICAgIEFzc2V0TW5nLmJlYXJBc3NldChHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyKVxyXG4gICAgICAgIGF3YWl0IG5ldyBNeURlbGF5KCkuc2V0RGVsYXkoMilcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4uc2V0TWFuU3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLnJlc2V0T2VnKClcclxuICAgICAgICB0aGlzLnBhbmVsX0JlYXIuaW5pdCgpXHJcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5nZXRUcmFpbkFjaXRvbigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIHRoaXMuc2hvd1RlYWNoaW5nKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dUZWFjaGluZygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkub3BlblRlYWNoaW5nKClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFRlYWNoaW5nKCkge1xyXG4gICAgICAgIEdhbWVNb2RsZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuU3RhcnQ7XHJcbiAgICAgICAgLy8gdGhpcy5wYW5lbF9VSS5zdGF0aW9uLmNoZW5nZVNwcml0KClcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnNldEJ0bkV2ZW50KClcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1hbkNhbWVyYSh0cnVlKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1pbmVDYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHRydWUpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuR08oKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgd2FpdFNpZ25hbExpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKGZhbHNlKVxyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsX01hbi5pc1dhaXRTaW5nbmFsTGluZ2h0KSByZXR1cm5cclxuICAgICAgICAvLyBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPT0gR2FtZVN0YXRlLldhaXRTaWduYWxMaWdodCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLldhaXRTaWduYWxMaWdodFxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdG9wKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0JlYXIuY2hlY2tTdGF0ZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5FbmRTaWduYWxMaWdodCgpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1ZpZGVvKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9VSS5zZXR0aW5nLml0ZW1NYXAuZ2V0KDApLm5vd1N0YXRlKSB7Ly/mmqvmmYLpgJnmqKPlr6vlnKjlj6bmg7Plpb3mlrnms5XvvIzmjIflvJXliLBTZXR0aW5nQnRuXHJcbiAgICAgICAgICAgIE11c2NpTW5nLnN3aWNoRWZmZWN0KClcclxuICAgICAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICBkYXRhLmtpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmkq3mlL7lronlhajlvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdldEtpZCA9IEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS52aWV3VHlwZSA9IDJcclxuICAgICAgICAgICAgICAgIGRhdGEua2lkID0gZ2V0S2lkO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pKt5pS+5buJ5pS/5b2x54mHXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VWaWRlbygpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe30sIFwiKlwiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xvc2VWaWRlbygpIHtcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9VSS5zZXR0aW5nLml0ZW1NYXAuZ2V0KDApLm5vd1N0YXRlKSB7Ly/mmqvmmYLpgJnmqKPlr6vlnKjlj6bmg7Plpb3mlrnms5XvvIzmjIflvJXliLBTZXR0aW5nQnRuXHJcbiAgICAgICAgICAgIE11c2NpTW5nLnN3aWNoRWZmZWN0KClcclxuICAgICAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHRydWUpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuR08oKVxyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dRQSgpIHtcclxuICAgICAgICBsZXQgZ2V0UUEgPSBcIlwiXHJcbiAgICAgICAgbGV0IGdldENob29lc2UgPSBcIlwiXHJcblxyXG4gICAgICAgIGdldFFBID0gR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9zdHJbR2FtZU1vZGxlLnFhSW5kZXhdXHJcbiAgICAgICAgZ2V0Q2hvb2VzZSA9IEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYltHYW1lTW9kbGUucWFJbmRleF1cclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnF1ZXN0aW9uLnJlc2V0KClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uc2V0UUFJbmZvKGdldFFBLCBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtW0dhbWVNb2RsZS5xYUluZGV4XSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uc2V0Q2hvb3NlKGdldENob29lc2UpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuU2hvd01lc3NhZ2VcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QWdhaW5RQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRRQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Fuc3dlcigpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCBnZXRBbnN3ZXIgPSBcIlwiXHJcbiAgICAgICAgZ2V0QW5zd2VyID0gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF0uc3Vic3RyaW5nKDAsIDEpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnJlc2V0KClcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmNob29zZUFuc3dlciA9PSBnZXRBbnN3ZXIpIHtcclxuICAgICAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIlRydWVcIilcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnRydWVBbnN3ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmZhbHNlQW5zd2VyKClcclxuICAgICAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkZhbHNlXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQW5zd2VyKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFeHBsYWluKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2V0SW5mb1N0cihHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkuZXhwbGFpbkxpYltHYW1lTW9kbGUucWFJbmRleF0pO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5leHBsYWluLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEV4cGxhaW4oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0dldFByb3BzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2hvd1N0YXRpb25JbmZvKHNlbGVjdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID09IEdhbWVTdGF0ZS5TaG93TWVzc2FnZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHNlbGVjdCA9PSA1IHx8IHNlbGVjdCA9PSAxMSB8fCBzZWxlY3QgPT0gMTUpIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSAhPSBHYW1lU3RhdGUuV2FpdClcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldFRyYWluTmFtZShUcmFpbkluZm9MaWJyYXJ5LmdldE5hbWUoc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0U3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbkluZm9fXCIgKyBzZWxlY3QudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldEluZm8oVHJhaW5JbmZvTGlicmFyeS5nZXRJbmZvKHNlbGVjdCkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNob3coKTsgYGBcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFRhdGlvbkluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLmhpZGUoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLldhaXRcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93R2V0UHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmdldFByb3BzLnNldERhdGEoXHJcbiAgICAgICAgICAgIFByb3BzTGlicmFyeS5saWIuZ2V0KHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pLFxyXG4gICAgICAgICAgICBBc3NldE1uZy5kYXRhX1NwcnRpZUF0bGFzLmdldChcIkdldFByb3BzX1wiICsgdGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbi50b1N0cmluZygpKVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuc2hvdygpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5nZXRQcm9wcyh0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJHZXRQcm9wc1wiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kR2V0UHJvcHMoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmdldFByb3BzLmhpZGUoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIEdhbWVNb2RsZS5xYUluZGV4KysvLyvlhanlgIvlnLDmlrnmmK/lm6DngrrnjqnlrrbmnIPmnInliIbmlK/vvIzlm6DmraTlnKjliIbmlK/nmoTmnKvnq6/liqAxSW5kZXhcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93RW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdG9wKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5wbGF5QmVhclNwcml0ZShHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZUVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICB9XHJcbiAgICBhZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgICAgICBNdXNjaU1uZy5tdXNpY1N0b3AoKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdEFsbFN0b3AoKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdvTG90dGVyeSgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlRW5kR2FtZSgpXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIm1hbmV5TWl4U291bmRcIilcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmJhY2tTY2FsZUFjdGlvbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmNsb3NlRG9vcigpXHJcbiAgICAgICAgTXVzY2lNbmcubXVzaWNTdG9wKClcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RBbGxTdG9wKClcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgIGRhdGEudmlld1R5cGUgPSAtMVxyXG4gICAgICAgIGRhdGEua2lkID0gZmFsc2VcclxuICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG5cclxuICAgICAgICB0aGlzLmRvb3JBZ2FpbkdhbWUoKS8v56mw6YGK5oiy5pW05YCL6YeN5paw77yM5Zug54K654++5Zyo6KaB6Lef57ay6aCB5ZCI5L2c6Zec5L+C5omA5Lul5YGa5rOV5pS56K6KXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLpgYrmiLLntZDmnZ9TaG935oq9542O6IiH5ZWP562UXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbmRUb0JhY2tHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VFbmRHYW1lKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNaW5lQ2FtZXJhKHRydWUpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5tb3ZlVG9TdGF0aW9uKEdhbWVNb2RsZS5tYXBJdGVtLmdldCgwKS5ub2RlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLmhpZGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2V0YnRuRXZlbnRfQWdhaW4oKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuYmFja0dhbWVVc2Uuc2hvdygpXHJcbiAgICB9XHJcbiAgICBkb29yQWdhaW5HYW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIG1lbkdvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYUNvbnRyb2xsLmNhbWVyYVN0YXRlICE9IENhbWVyYVN0YXRlLk1lbikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYSgwLjMpXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYW5XYWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbldhaXQoKVxyXG4gICAgfVxyXG4gICAgbWFuTGluZVdhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgbW92ZVRhcmdldChzZWxlY3Q6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSAhPSBHYW1lU3RhdGUuV2FpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcChmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnJlc2V0KClcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1hbkNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNaW5lQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvU3RhdGlvbihHYW1lTW9kbGUubWFwSXRlbS5nZXQoc2VsZWN0KS5ub2RlKVxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0YVVJU3RhcnQoc2V0Qm9vbGVhOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3Aoc2V0Qm9vbGVhKVxyXG4gICAgfVxyXG4gICAgY2xpbmV0Q2xpY2tTdGFydF9TdG9wKCkge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4uaXNXYWl0U2luZ25hbExpbmdodCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoKVxyXG4gICAgICAgIC8v5q2j5Zyo6LWwXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuaXNHbylcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuV2FpdCgpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgICAgICAgICAgdGhpcy5tZW5HbygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd0FsbFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYSh0cnVlKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpO1xyXG4gICAgfVxyXG4gICAgd2ViQ2hlY2tEYXRhKCkge1xyXG4gICAgICAgIGlmIChHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSkge1xyXG4gICAgICAgICAgICBHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSA9IGZhbHNlIC8v6YG/5YWN6YeN6KSH5pWyXHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICAgICAgZGF0YS5jbWQgPSAnQ2xvc2UnXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAvL+mWi+Wni+mBiuaIslxyXG4gICAgICAgICAgICB0aGlzLm1haW5Jbml0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy/pn7PmqILnmoTomZXnkIZcclxuICAgIHB1YmxpYyBsYXRlVXBkYXRlKCkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2Muc3lzLl9fYXVkaW9TdXBwb3J0LmNvbnRleHQ7XHJcbiAgICAgICAgaWYgKGNvbnRleHQuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLmF1ZGlvRW5naW5lLmdldFN0YXRlKE11c2NpTW5nLm11c2ljSUQpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShNdXNjaU1uZy5lZmZlY3RJRC5nZXQoJ0Rvb3JPcGVuJykpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuato+WcqOaSreaUvuWXjj9cIiArIGNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpO1xyXG5cclxuICAgICAgICAvLyBjYy5maW5kKFwiUGFuZWxf6ZW35a+s5ris6KmmL+imlueql1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5a+s77yaXCIgKyBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCkud2lkdGggKyBcIlxcbumrmO+8mlwiICsgY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLmhlaWdodFxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJQYW5lbF/plbflr6zmuKzoqaYv5peL6L2JXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Mudmlldy5faXNSb3RhdGVkLnRvU3RyaW5nKClcclxuICAgICAgICAvLyBjYy5nYW1lLlxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmNsYXNzIHBvc3RDbWQge1xyXG4gICAgY21kOiBzdHJpbmdcclxuICAgIHZpZXdUeXBlOiBudW1iZXJcclxuICAgIGtpZDogYm9vbGVhblxyXG4gICAgaXNSb3RhdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuIl19