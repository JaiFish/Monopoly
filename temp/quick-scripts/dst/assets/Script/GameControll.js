
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
        // this.panel_Test = cc.find("Canvas/Panel_Test").addComponent(Panel_Test);
        this.initEvent(GameEvent_1.GameEvent.SendModel, this.sendModle);
        this.initEvent(GameEvent_1.GameEvent.SendCommand, this.sendCommand);
        this.initEvent(GameEvent_1.GameEvent.GetStation, this.changeStationSprite);
        // cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL)
        // cc.view.enableAutoFullScreen(true);
        AssetMng_1.default.startLoad();
        // console.log(this.mapItem);
        // console.log(fcc);
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
        MusciMng_1.default.init();
        this.panel_Version.setVersion(GameModle_1.default.version);
        this.sendModle(GameEvent_1.GameEvent.InitMap);
        this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
        GameModle_1.default.gameState = GameState_1.GameState.Wait;
        GameModle_1.default.webPostMessage.connect();
        this.panel_Message.node.opacity = 255;
        this.panel_Door.reset();
        this.checkData();
        // this.mainInit()
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
                        GameModle_1.default.isEndLoadingData = false;
                        this.panel_Loading.show();
                        //Test
                        // GameModle.playData.level = 2
                        // GameModle.qaLibrary = new QALibrary(GameModle.playData.level, 3);
                        // GameModle.chooseLibrary = new ChooseLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
                        // GameModle.answerLibrary = new AnswerLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
                        // GameModle.explainLibrary = new ExplainLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
                        // console.log(GameModle.qaLibrary.qaLib_str);
                        // console.log(GameModle.chooseLibrary.chooseLib);
                        // console.log(GameModle.answerLibrary.answerLib_str);
                        // console.log(GameModle.explainLibrary.explainLib);
                        return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        //Test
                        // GameModle.playData.level = 2
                        // GameModle.qaLibrary = new QALibrary(GameModle.playData.level, 3);
                        // GameModle.chooseLibrary = new ChooseLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
                        // GameModle.answerLibrary = new AnswerLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
                        // GameModle.explainLibrary = new ExplainLibrary(GameModle.playData.level, GameModle.qaLibrary.qaLib_num)
                        // console.log(GameModle.qaLibrary.qaLib_str);
                        // console.log(GameModle.chooseLibrary.chooseLib);
                        // console.log(GameModle.answerLibrary.answerLib_str);
                        // console.log(GameModle.explainLibrary.explainLib);
                        _a.sent();
                        GameModle_1.default.isEndLoadingData = true;
                        MusciMng_1.default.musicPlay("gameBG");
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
                        // await AssetMng.checkState();
                        // MusciMng.musicPlay("gameBG")
                        // MusciMng.effectPlay("DoorOpen")
                        // MusciMng.musicStop()
                        // MusciMng.effectAllStop()
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
                        return [4 /*yield*/, new DelayTime_1.MyDelay().setDelay(0.5)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cameraControll.moveToManCamera(false)
                            // GameModle.playData.level = 0
                            // GameModle.playData.trainTypeNumber = 0
                            // GameModle.playData.trainType = TrainType.Type0
                            // this.endChoosTrain()
                            // return
                        ];
                    case 5:
                        _a.sent();
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
                    case 0: return [4 /*yield*/, new DelayTime_1.MyDelay().setDelay(2)];
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
                        MusciMng_1.default.swichEffect();
                        MusciMng_1.default.swichMusic();
                        switch (this.panel_Man.nowStation) {
                            case 1:
                                data.cmd = "OpenView";
                                data.viewType = 1;
                                data.kid = false;
                                GameModle_1.default.webPostMessage.send(data);
                                console.log("播放安全影片");
                                break;
                            case 20:
                                getKid = GameModle_1.default.playData.level == 0 ? true : false;
                                data.cmd = "OpenView";
                                data.viewType = 2;
                                data.kid = getKid;
                                GameModle_1.default.webPostMessage.send(data);
                                console.log("播放廉政影片");
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
                        MusciMng_1.default.swichEffect();
                        MusciMng_1.default.swichMusic();
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
                        this.panel_Man.manState = GameState_1.GameState.ShowMessage;
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
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
                        data = new postCmd();
                        data.cmd = "OpenView";
                        data.viewType = -1;
                        data.kid = false;
                        GameModle_1.default.webPostMessage.send(data);
                        console.log("遊戲結束Show抽獎與問答");
                        return [2 /*return*/];
                }
            });
        });
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
                        return [4 /*yield*/, this.cameraControll.moveToManCamera()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.panel_Man.manGO();
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
        else
            this.panel_Man.manGO();
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
            GameModle_1.default.webPostMessage.send(data);
            //開始遊戲
            this.mainInit();
        }
    };
    Controll.prototype.update = function (dt) {
        // console.log(cc.audioEngine.getState(MusciMng.musicID));
        // console.log(cc.audioEngine.getState(MusciMng.effectID.get('DoorOpen')));
        // console.log("正在播放嗎?" + cc.audioEngine.isMusicPlaying());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBR2xELDhDQUEyQztBQUMzQyxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUEwYUEsQ0FBQztJQTFaRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMs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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuL0Fzc2V0L0Fzc2V0TW5nXCI7XHJcbmltcG9ydCBDYW1lcmFDb250cm9sbCBmcm9tIFwiLi9DbGFzcy9DYW1lcmFDb250cm9sbFwiO1xyXG5pbXBvcnQgUGFuZWxfTWFuIGZyb20gXCIuL0NsYXNzL01hbS9QYW5lbF9NYW5cIjtcclxuaW1wb3J0IFBhbmVsX0FuaVBhdGggZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQW5pUGF0aFwiO1xyXG5pbXBvcnQgUGFuZWxfQ2xvdWQgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQ2xvdWRcIjtcclxuaW1wb3J0IFBhbmVsX0Rvb3IgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfRG9vclwiO1xyXG5pbXBvcnQgUGFuZWxfTWFwIGZyb20gXCIuL0NsYXNzL1BhbmVsX01hcFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuL0dhbWVNb2RsZVwiO1xyXG5pbXBvcnQgUGFuZWxfVUkgZnJvbSBcIi4vQ2xhc3MvVUkvUGFuZWxfVUlcIjtcclxuaW1wb3J0IFBhbmVsX01lc3NhZ2UgZnJvbSBcIi4vQ2xhc3MvTWVzc2FnZS9QYW5lbF9NZXNzYWdlXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IFBhbmVsX0JlYXIgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQmVhclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgQW5zd2VyTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Fuc3dlckxpYnJhcnlcIjtcclxuaW1wb3J0IEV4cGxhaW5MaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvRXhwbGFpbkxpYnJhcnlcIjtcclxuaW1wb3J0IFRyYWluSW5mb0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9UcmFpbkluZm9MaWJyYXJ5XCI7XHJcbmltcG9ydCBQcm9wc0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9Qcm9wc0xpYnJhcnlcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0NhbWVyYVN0YXRlXCI7XHJcbmltcG9ydCBQYW5lbF9WZXJzaW9uIGZyb20gXCIuL0NsYXNzL1BhbmVsX1ZlcnNpb25cIjtcclxuaW1wb3J0IFBhbmVsX1Rlc3QgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfVGVzdFwiO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tIFwiLi9FbnVtL1RyYWluVHlwZVwiO1xyXG5pbXBvcnQgeyBNeURlbGF5IH0gZnJvbSBcIi4vRGF0YS9EZWxheVRpbWVcIjtcclxuaW1wb3J0IFBhbmVsX0J1ZmVyIGZyb20gXCIuL0NsYXNzL1BhbmVsX0J1ZmVyXCI7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tIFwiLi9EYXRhL2Jhc2UvTXVzY2lNbmdcIjtcclxuaW1wb3J0IFBhbmVsX0xvYWRpbmcgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfTG9hZGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgcGFuZWxfQW5pUGF0aDogUGFuZWxfQW5pUGF0aDtcclxuICAgIHBhbmVsX01hcDogUGFuZWxfTWFwO1xyXG4gICAgcGFuZWxfTWFuOiBQYW5lbF9NYW47XHJcbiAgICBjYW1lcmFDb250cm9sbDogQ2FtZXJhQ29udHJvbGw7XHJcbiAgICBwYW5lbF9Eb29yOiBQYW5lbF9Eb29yO1xyXG4gICAgcGFuZWxfQ2xvdWQ6IFBhbmVsX0Nsb3VkO1xyXG4gICAgcGFuZWxfVUk6IFBhbmVsX1VJO1xyXG4gICAgcGFuZWxfTWVzc2FnZTogUGFuZWxfTWVzc2FnZVxyXG4gICAgcGFuZWxfQmVhcjogUGFuZWxfQmVhclxyXG4gICAgcGFuZWxfVmVyc2lvbjogUGFuZWxfVmVyc2lvblxyXG4gICAgcGFuZWxfVGVzdDogUGFuZWxfVGVzdFxyXG4gICAgcGFuZWxfQnVmZXI6IFBhbmVsX0J1ZmVyXHJcbiAgICBwYW5lbF9Mb2FkaW5nOiBQYW5lbF9Mb2FkaW5nXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTG9hZGluZyA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTG9hZGluZ1wiKS5hZGRDb21wb25lbnQoUGFuZWxfTG9hZGluZyk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9BbmlQYXRoID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9BbmlQYXRoXCIpLmFkZENvbXBvbmVudChQYW5lbF9BbmlQYXRoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hcCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTWFwXCIpLmFkZENvbXBvbmVudChQYW5lbF9NYXApO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYW5cIikuYWRkQ29tcG9uZW50KFBhbmVsX01hbik7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbkNhbWVyYVwiKS5hZGRDb21wb25lbnQoQ2FtZXJhQ29udHJvbGwpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfRG9vciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfRG9vclwiKS5hZGRDb21wb25lbnQoUGFuZWxfRG9vcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9DbG91ZCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQ2xvdWRcIikuYWRkQ29tcG9uZW50KFBhbmVsX0Nsb3VkKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9VSVwiKS5hZGRDb21wb25lbnQoUGFuZWxfVUkpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfQmVhciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQmVhclwiKS5hZGRDb21wb25lbnQoUGFuZWxfQmVhcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9CdWZlciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQnVmZXJcIikuYWRkQ29tcG9uZW50KFBhbmVsX0J1ZmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NZXNzYWdlXCIpLmFkZENvbXBvbmVudChQYW5lbF9NZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24gPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1ZlcnNpb25cIikuYWRkQ29tcG9uZW50KFBhbmVsX1ZlcnNpb24pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnBhbmVsX1Rlc3QgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1Rlc3RcIikuYWRkQ29tcG9uZW50KFBhbmVsX1Rlc3QpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2VuZE1vZGVsLCB0aGlzLnNlbmRNb2RsZSlcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuU2VuZENvbW1hbmQsIHRoaXMuc2VuZENvbW1hbmQpXHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoR2FtZUV2ZW50LkdldFN0YXRpb24sIHRoaXMuY2hhbmdlU3RhdGlvblNwcml0ZSlcclxuXHJcbiAgICAgICAgLy8gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpXHJcbiAgICAgICAgLy8gY2Mudmlldy5lbmFibGVBdXRvRnVsbFNjcmVlbih0cnVlKTtcclxuXHJcbiAgICAgICAgQXNzZXRNbmcuc3RhcnRMb2FkKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXBJdGVtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmY2MpO1xyXG4gICAgICAgIGZjYy5jb25maWdNZ3JcclxuICAgICAgICAgICAgLmJ1aWxkKClcclxuICAgICAgICBsZXQgdXBkYXRlVGltZSA9IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TID8gNTAwIDogMTAwXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyLnNjZW5lRGlyZWN0aW9uID0gZmNjLnR5cGUuU2NlbmVEaXJlY3Rpb25UeXBlLkxBTkRTQ0FQRVxyXG4gICAgICAgIGZjYy5zY2VuZU1nclxyXG4gICAgICAgICAgICAuc2V0RGVzaWduSGVpZ2h0KDcyMClcclxuICAgICAgICAgICAgLnNldERlc2lnbldpZHRoKDEyODApXHJcbiAgICAgICAgICAgIC51cGRhdGVTaXplKGZjYy50eXBlLlNjZW5lU3R5bGVUeXBlLkhPUklaT05UQUwpXHJcbiAgICAgICAgICAgIC5zdGFydExpc3RlbmVyKHVwZGF0ZVRpbWUpXHJcblxyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgTXVzY2lNbmcuaW5pdCgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9WZXJzaW9uLnNldFZlcnNpb24oR2FtZU1vZGxlLnZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMuc2VuZE1vZGxlKEdhbWVFdmVudC5Jbml0TWFwKTtcclxuICAgICAgICB0aGlzLkV2ZW50RW1pdChHYW1lRXZlbnQuQ2xvc2VCdWZlcilcclxuICAgICAgICBHYW1lTW9kbGUuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLldhaXRcclxuICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2UuY29ubmVjdCgpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5ub2RlLm9wYWNpdHkgPSAyNTVcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yLnJlc2V0KClcclxuICAgICAgICB0aGlzLmNoZWNrRGF0YSgpXHJcbiAgICAgICAgLy8gdGhpcy5tYWluSW5pdCgpXHJcbiAgICB9XHJcbiAgICBzZW5kTW9kbGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkluaXRNYXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdCh0eXBlLCB0aGlzLnBhbmVsX0FuaVBhdGguVFdQYXRoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CZWFyU2V0TW9kbGU6XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LlNldE1vZGVsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQodHlwZSwgR2FtZU1vZGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkV2ZW50RW1pdCh0eXBlKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGlvblNwcml0ZShfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoX251bWJlciA8IDIgfHwgX251bWJlciA+IDE5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IEdhbWVNb2RsZS5tYXBTcHJpdGUuZ2V0KF9udW1iZXIpXHJcbiAgICAgICAgaWYgKF9jbGFzcy5pc0dldCkgcmV0dXJuO1xyXG4gICAgICAgIF9jbGFzcy5teVNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9cIiArIF9udW1iZXIudG9TdHJpbmcoKSlcclxuICAgICAgICBfY2xhc3MuZ2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZW5kQ29tbWFuZCh0eXBlOiBDb21tYW1uZCwgLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0oLi4uYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqItcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2hlY2tEYXRhKCkge1xyXG4gICAgICAgIEdhbWVNb2RsZS5pc0VuZExvYWRpbmdEYXRhID0gZmFsc2VcclxuICAgICAgICB0aGlzLnBhbmVsX0xvYWRpbmcuc2hvdygpXHJcbiAgICAgICAgLy9UZXN0XHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMlxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5xYUxpYnJhcnkgPSBuZXcgUUFMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgMyk7XHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLmNob29zZUxpYnJhcnkgPSBuZXcgQ2hvb3NlTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5hbnN3ZXJMaWJyYXJ5ID0gbmV3IEFuc3dlckxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICAvLyBHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkgPSBuZXcgRXhwbGFpbkxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9zdHIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5LmV4cGxhaW5MaWIpO1xyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICBHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSA9IHRydWVcclxuICAgICAgICBNdXNjaU1uZy5tdXNpY1BsYXkoXCJnYW1lQkdcIilcclxuICAgICAgICB0aGlzLnBhbmVsX0xvYWRpbmcuQWN0aW9uaGlkZSgpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcuZWZmZWN0UGxheShcIkRvb3JPcGVuXCIpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcubXVzaWNTdG9wKClcclxuICAgICAgICAvLyBNdXNjaU1uZy5lZmZlY3RBbGxTdG9wKClcclxuXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgbWFpbkluaXQoKSB7XHJcbiAgICAgICAgLy8gYXdhaXQgQXNzZXRNbmcuY2hlY2tTdGF0ZSgpO1xyXG4gICAgICAgIC8vIE11c2NpTW5nLm11c2ljUGxheShcImdhbWVCR1wiKVxyXG4gICAgICAgIC8vIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJEb29yT3BlblwiKVxyXG4gICAgICAgIC8vIE11c2NpTW5nLm11c2ljU3RvcCgpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcuZWZmZWN0QWxsU3RvcCgpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkRvb3JPcGVuXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLm9wZW5Eb29yKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3Iuc2NhbGVBY3Rpb24oKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJtYW5leU1peFNvdW5kXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgYXdhaXQgbmV3IE15RGVsYXkoKS5zZXREZWxheSgwLjUpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5tb3ZlVG9NYW5DYW1lcmEoZmFsc2UpXHJcblxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyID0gMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUgPSBUcmFpblR5cGUuVHlwZTBcclxuICAgICAgICAvLyB0aGlzLmVuZENob29zVHJhaW4oKVxyXG4gICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVGlja2V0LnNob3coKVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uID0gMjBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAxXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc2VUaWNrZXQoKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dRQSgpXHJcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0UHJvcHMoKVxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZENob29zZVRpY2tldCgpIHtcclxuICAgICAgICBHYW1lTW9kbGUucWFJbmRleCA9IDBcclxuICAgICAgICBHYW1lTW9kbGUucWFMaWJyYXJ5ID0gbmV3IFFBTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIDMpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5ID0gbmV3IENob29zZUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeSA9IG5ldyBBbnN3ZXJMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5ID0gbmV3IEV4cGxhaW5MaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUUHpoYzluqvvvJpcIiArIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfc3RyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumBuOWQke+8mlwiICsgR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWVj+etlO+8mlwiICsgR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnpaXop6PvvJpcIiArIEdhbWVNb2RsZS5leHBsYWluTGlicmFyeS5leHBsYWluTGliKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RpY2tldC5oaWRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmluaXRUcmFpblNwcml0ZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5zaG93KClcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRDaG9vc1RyYWluKCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBNeURlbGF5KCkuc2V0RGVsYXkoMilcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5zZXRNYW5TcHJpdGUoQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZSkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ucmVzZXRPZWcoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfQmVhci5pbml0KClcclxuICAgICAgICAvLyBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmdldFRyYWluQWNpdG9uKClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmhpZGUoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgdGhpcy5zaG93VGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1RlYWNoaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5vcGVuVGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kVGVhY2hpbmcoKSB7XHJcbiAgICAgICAgR2FtZU1vZGxlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5TdGFydDtcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX1VJLnN0YXRpb24uY2hlbmdlU3ByaXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2V0QnRuRXZlbnQoKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyB3YWl0U2lnbmFsTGlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoZmFsc2UpXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLmlzV2FpdFNpbmduYWxMaW5naHQpIHJldHVyblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9PSBHYW1lU3RhdGUuV2FpdFNpZ25hbExpZ2h0KSByZXR1cm47XHJcbiAgICAgICAgLy8gdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFNpZ25hbExpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0b3AoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfQmVhci5jaGVja1N0YXRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkVuZFNpZ25hbExpZ2h0KClcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93VmlkZW8oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuU2hvd01lc3NhZ2VcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IHBvc3RDbWQoKVxyXG4gICAgICAgIE11c2NpTW5nLnN3aWNoRWZmZWN0KClcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaE11c2ljKClcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICBkYXRhLmtpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lronlhajlvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdldEtpZCA9IEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS52aWV3VHlwZSA9IDJcclxuICAgICAgICAgICAgICAgIGRhdGEua2lkID0gZ2V0S2lkO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5buJ5pS/5b2x54mHXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VWaWRlbygpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe30sIFwiKlwiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xvc2VWaWRlbygpIHtcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1FBKCkge1xyXG4gICAgICAgIGxldCBnZXRRQSA9IFwiXCJcclxuICAgICAgICBsZXQgZ2V0Q2hvb2VzZSA9IFwiXCJcclxuXHJcbiAgICAgICAgZ2V0UUEgPSBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF1cclxuICAgICAgICBnZXRDaG9vZXNlID0gR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliW0dhbWVNb2RsZS5xYUluZGV4XVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRRQUluZm8oZ2V0UUEsIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW1bR2FtZU1vZGxlLnFhSW5kZXhdKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRDaG9vc2UoZ2V0Q2hvb2VzZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnF1ZXN0aW9uLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dBZ2FpblFBKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnF1ZXN0aW9uLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFFBKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93QW5zd2VyKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dBbnN3ZXIoKSB7XHJcbiAgICAgICAgbGV0IGdldEFuc3dlciA9IFwiXCJcclxuICAgICAgICBnZXRBbnN3ZXIgPSBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeS5hbnN3ZXJMaWJfc3RyW0dhbWVNb2RsZS5xYUluZGV4XS5zdWJzdHJpbmcoMCwgMSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIucmVzZXQoKVxyXG4gICAgICAgIGlmIChHYW1lTW9kbGUuY2hvb3NlQW5zd2VyID09IGdldEFuc3dlcikge1xyXG4gICAgICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiVHJ1ZVwiKVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIudHJ1ZUFuc3dlcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuZmFsc2VBbnN3ZXIoKVxyXG4gICAgICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiRmFsc2VcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRBbnN3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNob3dHZXRQcm9wcygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd0V4cGxhaW4oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5zZXRJbmZvU3RyKEdhbWVNb2RsZS5leHBsYWluTGlicmFyeS5leHBsYWluTGliW0dhbWVNb2RsZS5xYUluZGV4XSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kRXhwbGFpbigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93U3RhdGlvbkluZm8oc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlNob3dNZXNzYWdlKSByZXR1cm5cclxuICAgICAgICBpZiAoc2VsZWN0ID09IDUgfHwgc2VsZWN0ID09IDExIHx8IHNlbGVjdCA9PSAxNSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlICE9IEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5MaW5lV2FpdCgpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0VHJhaW5OYW1lKFRyYWluSW5mb0xpYnJhcnkuZ2V0TmFtZShzZWxlY3QpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5zdGF0aW9uSW5mby5zZXRTcHJpdGUoQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uSW5mb19cIiArIHNlbGVjdC50b1N0cmluZygpKSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0SW5mbyhUcmFpbkluZm9MaWJyYXJ5LmdldEluZm8oc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2hvdygpOyBgYFxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kVGF0aW9uSW5mbygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uaGlkZSgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dHZXRQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuc2V0RGF0YShcclxuICAgICAgICAgICAgUHJvcHNMaWJyYXJ5LmxpYi5nZXQodGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbiksXHJcbiAgICAgICAgICAgIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiR2V0UHJvcHNfXCIgKyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5zaG93KClcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLmdldFByb3BzKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkdldFByb3BzXCIpXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRHZXRQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgR2FtZU1vZGxlLnFhSW5kZXgrKy8vK+WFqeWAi+WcsOaWueaYr+WboOeCuueOqeWutuacg+acieWIhuaUr++8jOWboOatpOWcqOWIhuaUr+eahOacq+err+WKoDFJbmRleFxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5wbGF5QmVhclNwcml0ZShHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZUVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICB9XHJcbiAgICBhZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnb0xvdHRlcnkoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJtYW5leU1peFNvdW5kXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmJhY2tTY2FsZUFjdGlvbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmNsb3NlRG9vcigpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgcG9zdENtZCgpXHJcbiAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICBkYXRhLnZpZXdUeXBlID0gLTFcclxuICAgICAgICBkYXRhLmtpZCA9IGZhbHNlXHJcbiAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumBiuaIsue1kOadn1Nob3fmir3njY7oiIfllY/nrZRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZG9vckFnYWluR2FtZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2VuY2VcIik7XHJcbiAgICB9XHJcbiAgICBhc3luYyBtZW5HbygpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW1lcmFDb250cm9sbC5jYW1lcmFTdGF0ZSAhPSBDYW1lcmFTdGF0ZS5NZW4pXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvTWFuQ2FtZXJhKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBtYW5XYWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbldhaXQoKVxyXG4gICAgfVxyXG4gICAgbWFuTGluZVdhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgbW92ZVRhcmdldChzZWxlY3Q6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSAhPSBHYW1lU3RhdGUuV2FpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcChmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnJlc2V0KClcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1hbkNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNaW5lQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvU3RhdGlvbihHYW1lTW9kbGUubWFwSXRlbS5nZXQoc2VsZWN0KS5ub2RlKVxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0YVVJU3RhcnQoc2V0Qm9vbGVhOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3Aoc2V0Qm9vbGVhKVxyXG4gICAgfVxyXG4gICAgY2xpbmV0Q2xpY2tTdGFydF9TdG9wKCkge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4uaXNXYWl0U2luZ25hbExpbmdodCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoKVxyXG4gICAgICAgIC8v5q2j5Zyo6LWwXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuaXNHbylcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuV2FpdCgpXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcblxyXG5cclxuICAgIH1cclxuICAgIHNob3dBbGxWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1pbmVDYW1lcmEodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuc2hvd0FsbFZpZXcoKTtcclxuICAgIH1cclxuICAgIHdlYkNoZWNrRGF0YSgpIHtcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmlzRW5kTG9hZGluZ0RhdGEpIHtcclxuICAgICAgICAgICAgR2FtZU1vZGxlLmlzRW5kTG9hZGluZ0RhdGEgPSBmYWxzZSAvL+mBv+WFjemHjeikh+aVslxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICAgICAgZGF0YS5jbWQgPSAnQ2xvc2UnXHJcbiAgICAgICAgICAgIEdhbWVNb2RsZS53ZWJQb3N0TWVzc2FnZS5zZW5kKGRhdGEpXHJcbiAgICAgICAgICAgIC8v6ZaL5aeL6YGK5oiyXHJcbiAgICAgICAgICAgIHRoaXMubWFpbkluaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShNdXNjaU1uZy5tdXNpY0lEKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUoTXVzY2lNbmcuZWZmZWN0SUQuZ2V0KCdEb29yT3BlbicpKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmraPlnKjmkq3mlL7ll44/XCIgKyBjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmNsYXNzIHBvc3RDbWQge1xyXG4gICAgY21kOiBzdHJpbmdcclxuICAgIHZpZXdUeXBlOiBudW1iZXJcclxuICAgIGtpZDogYm9vbGVhblxyXG59XHJcblxyXG5cclxuIl19