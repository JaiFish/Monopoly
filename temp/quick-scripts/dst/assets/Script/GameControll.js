
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
                        return [4 /*yield*/, this.cameraControll.moveToManCamera()
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
                        MusciMng_1.default.musicStop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBR2xELDhDQUEyQztBQUMzQyxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUErYUEsQ0FBQztJQS9aRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMs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QTtJQUlBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRNbmcgZnJvbSBcIi4vQXNzZXQvQXNzZXRNbmdcIjtcclxuaW1wb3J0IENhbWVyYUNvbnRyb2xsIGZyb20gXCIuL0NsYXNzL0NhbWVyYUNvbnRyb2xsXCI7XHJcbmltcG9ydCBQYW5lbF9NYW4gZnJvbSBcIi4vQ2xhc3MvTWFtL1BhbmVsX01hblwiO1xyXG5pbXBvcnQgUGFuZWxfQW5pUGF0aCBmcm9tIFwiLi9DbGFzcy9QYW5lbF9BbmlQYXRoXCI7XHJcbmltcG9ydCBQYW5lbF9DbG91ZCBmcm9tIFwiLi9DbGFzcy9QYW5lbF9DbG91ZFwiO1xyXG5pbXBvcnQgUGFuZWxfRG9vciBmcm9tIFwiLi9DbGFzcy9QYW5lbF9Eb29yXCI7XHJcbmltcG9ydCBQYW5lbF9NYXAgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfTWFwXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuL0VudW0vR2FtZUV2ZW50XCI7XHJcbmltcG9ydCBHYW1lTW9kbGUgZnJvbSBcIi4vR2FtZU1vZGxlXCI7XHJcbmltcG9ydCBQYW5lbF9VSSBmcm9tIFwiLi9DbGFzcy9VSS9QYW5lbF9VSVwiO1xyXG5pbXBvcnQgUGFuZWxfTWVzc2FnZSBmcm9tIFwiLi9DbGFzcy9NZXNzYWdlL1BhbmVsX01lc3NhZ2VcIjtcclxuaW1wb3J0IENvbXBvbmVudEJhc2UgZnJvbSBcIi4vRGF0YS9iYXNlL0NvbXBvbmVudEJhc2VcIjtcclxuaW1wb3J0IHsgQ29tbWFtbmQgfSBmcm9tIFwiLi9FbnVtL0NvbW1hZFwiO1xyXG5pbXBvcnQgUGFuZWxfQmVhciBmcm9tIFwiLi9DbGFzcy9QYW5lbF9CZWFyXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCBRQUxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9RQUxpYnJhcnlcIjtcclxuaW1wb3J0IENob29zZUxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9DaG9vc2VMaWJyYXJ5XCI7XHJcbmltcG9ydCBBbnN3ZXJMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQW5zd2VyTGlicmFyeVwiO1xyXG5pbXBvcnQgRXhwbGFpbkxpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9FeHBsYWluTGlicmFyeVwiO1xyXG5pbXBvcnQgVHJhaW5JbmZvTGlicmFyeSBmcm9tIFwiLi9EYXRhL1RyYWluSW5mb0xpYnJhcnlcIjtcclxuaW1wb3J0IFByb3BzTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL1Byb3BzTGlicmFyeVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFTdGF0ZSB9IGZyb20gXCIuL0VudW0vQ2FtZXJhU3RhdGVcIjtcclxuaW1wb3J0IFBhbmVsX1ZlcnNpb24gZnJvbSBcIi4vQ2xhc3MvUGFuZWxfVmVyc2lvblwiO1xyXG5pbXBvcnQgUGFuZWxfVGVzdCBmcm9tIFwiLi9DbGFzcy9QYW5lbF9UZXN0XCI7XHJcbmltcG9ydCB7IFRyYWluVHlwZSB9IGZyb20gXCIuL0VudW0vVHJhaW5UeXBlXCI7XHJcbmltcG9ydCB7IE15RGVsYXkgfSBmcm9tIFwiLi9EYXRhL0RlbGF5VGltZVwiO1xyXG5pbXBvcnQgUGFuZWxfQnVmZXIgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQnVmZXJcIjtcclxuaW1wb3J0IE11c2NpTW5nIGZyb20gXCIuL0RhdGEvYmFzZS9NdXNjaU1uZ1wiO1xyXG5pbXBvcnQgUGFuZWxfTG9hZGluZyBmcm9tIFwiLi9DbGFzcy9QYW5lbF9Mb2FkaW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGwgZXh0ZW5kcyBDb21wb25lbnRCYXNlIHtcclxuXHJcbiAgICBwYW5lbF9BbmlQYXRoOiBQYW5lbF9BbmlQYXRoO1xyXG4gICAgcGFuZWxfTWFwOiBQYW5lbF9NYXA7XHJcbiAgICBwYW5lbF9NYW46IFBhbmVsX01hbjtcclxuICAgIGNhbWVyYUNvbnRyb2xsOiBDYW1lcmFDb250cm9sbDtcclxuICAgIHBhbmVsX0Rvb3I6IFBhbmVsX0Rvb3I7XHJcbiAgICBwYW5lbF9DbG91ZDogUGFuZWxfQ2xvdWQ7XHJcbiAgICBwYW5lbF9VSTogUGFuZWxfVUk7XHJcbiAgICBwYW5lbF9NZXNzYWdlOiBQYW5lbF9NZXNzYWdlXHJcbiAgICBwYW5lbF9CZWFyOiBQYW5lbF9CZWFyXHJcbiAgICBwYW5lbF9WZXJzaW9uOiBQYW5lbF9WZXJzaW9uXHJcbiAgICAvLyBwYW5lbF9UZXN0OiBQYW5lbF9UZXN0XHJcbiAgICBwYW5lbF9CdWZlcjogUGFuZWxfQnVmZXJcclxuICAgIHBhbmVsX0xvYWRpbmc6IFBhbmVsX0xvYWRpbmdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Mb2FkaW5nID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9Mb2FkaW5nXCIpLmFkZENvbXBvbmVudChQYW5lbF9Mb2FkaW5nKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0FuaVBhdGggPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0FuaVBhdGhcIikuYWRkQ29tcG9uZW50KFBhbmVsX0FuaVBhdGgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFwID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYXBcIikuYWRkQ29tcG9uZW50KFBhbmVsX01hcCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4gPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01hblwiKS5hZGRDb21wb25lbnQoUGFuZWxfTWFuKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsID0gY2MuZmluZChcIkNhbnZhcy9NYWluQ2FtZXJhXCIpLmFkZENvbXBvbmVudChDYW1lcmFDb250cm9sbCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9Eb29yXCIpLmFkZENvbXBvbmVudChQYW5lbF9Eb29yKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0Nsb3VkID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9DbG91ZFwiKS5hZGRDb21wb25lbnQoUGFuZWxfQ2xvdWQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1VJXCIpLmFkZENvbXBvbmVudChQYW5lbF9VSSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9CZWFyID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9CZWFyXCIpLmFkZENvbXBvbmVudChQYW5lbF9CZWFyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0J1ZmVyID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9CdWZlclwiKS5hZGRDb21wb25lbnQoUGFuZWxfQnVmZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01lc3NhZ2VcIikuYWRkQ29tcG9uZW50KFBhbmVsX01lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbiA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVmVyc2lvblwiKS5hZGRDb21wb25lbnQoUGFuZWxfVmVyc2lvbik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfVGVzdCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVGVzdFwiKS5hZGRDb21wb25lbnQoUGFuZWxfVGVzdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kTW9kZWwsIHRoaXMuc2VuZE1vZGxlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgdGhpcy5zZW5kQ29tbWFuZClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuR2V0U3RhdGlvbiwgdGhpcy5jaGFuZ2VTdGF0aW9uU3ByaXRlKVxyXG5cclxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTClcclxuICAgICAgICAvLyBjYy52aWV3LmVuYWJsZUF1dG9GdWxsU2NyZWVuKHRydWUpO1xyXG5cclxuICAgICAgICBBc3NldE1uZy5zdGFydExvYWQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcEl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZjYyk7XHJcbiAgICAgICAgZmNjLmNvbmZpZ01nclxyXG4gICAgICAgICAgICAuYnVpbGQoKVxyXG4gICAgICAgIGxldCB1cGRhdGVUaW1lID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgPyA1MDAgOiAxMDBcclxuICAgICAgICBmY2Muc2NlbmVNZ3Iuc2NlbmVEaXJlY3Rpb24gPSBmY2MudHlwZS5TY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIodXBkYXRlVGltZSlcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBNdXNjaU1uZy5pbml0KClcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24uc2V0VmVyc2lvbihHYW1lTW9kbGUudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5zZW5kTW9kbGUoR2FtZUV2ZW50LkluaXRNYXApO1xyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5DbG9zZUJ1ZmVyKVxyXG4gICAgICAgIEdhbWVNb2RsZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIEdhbWVNb2RsZS53ZWJQb3N0TWVzc2FnZS5jb25uZWN0KClcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLm5vZGUub3BhY2l0eSA9IDI1NVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX0Rvb3IucmVzZXQoKVxyXG4gICAgICAgIHRoaXMuY2hlY2tEYXRhKClcclxuICAgICAgICAvLyB0aGlzLm1haW5Jbml0KClcclxuICAgIH1cclxuICAgIHNlbmRNb2RsZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lRXZlbnQuSW5pdE1hcDpcclxuICAgICAgICAgICAgICAgIHRoaXMuRXZlbnRFbWl0KHR5cGUsIHRoaXMucGFuZWxfQW5pUGF0aC5UV1BhdGgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkJlYXJTZXRNb2RsZTpcclxuICAgICAgICAgICAgY2FzZSBHYW1lRXZlbnQuU2V0TW9kZWw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdCh0eXBlLCBHYW1lTW9kbGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuRXZlbnRFbWl0KHR5cGUpXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTdGF0aW9uU3ByaXRlKF9udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChfbnVtYmVyIDwgMiB8fCBfbnVtYmVyID4gMTkpIHJldHVybjtcclxuICAgICAgICBsZXQgX2NsYXNzID0gR2FtZU1vZGxlLm1hcFNwcml0ZS5nZXQoX251bWJlcilcclxuICAgICAgICBpZiAoX2NsYXNzLmlzR2V0KSByZXR1cm47XHJcbiAgICAgICAgX2NsYXNzLm15U3ByaXRlLnNwcml0ZUZyYW1lID0gQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uX1wiICsgX251bWJlci50b1N0cmluZygpKVxyXG4gICAgICAgIF9jbGFzcy5nZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNlbmRDb21tYW5kKHR5cGU6IENvbW1hbW5kLCAuLi5hbnk6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpc1t0eXBlXSguLi5hbnkpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa1geeoi1xyXG4gICAgICovXHJcbiAgICBhc3luYyBjaGVja0RhdGEoKSB7XHJcbiAgICAgICAgR2FtZU1vZGxlLmlzRW5kTG9hZGluZ0RhdGEgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMucGFuZWxfTG9hZGluZy5zaG93KClcclxuICAgICAgICAvL1Rlc3RcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAyXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnFhTGlicmFyeSA9IG5ldyBRQUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCAzKTtcclxuICAgICAgICAvLyBHYW1lTW9kbGUuY2hvb3NlTGlicmFyeSA9IG5ldyBDaG9vc2VMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkgPSBuZXcgQW5zd2VyTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5leHBsYWluTGlicmFyeSA9IG5ldyBFeHBsYWluTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUuYW5zd2VyTGlicmFyeS5hbnN3ZXJMaWJfc3RyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkuZXhwbGFpbkxpYik7XHJcbiAgICAgICAgYXdhaXQgQXNzZXRNbmcuY2hlY2tTdGF0ZSgpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5pc0VuZExvYWRpbmdEYXRhID0gdHJ1ZVxyXG4gICAgICAgIE11c2NpTW5nLm11c2ljUGxheShcImdhbWVCR1wiKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTG9hZGluZy5BY3Rpb25oaWRlKClcclxuICAgICAgICAvLyBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiRG9vck9wZW5cIilcclxuICAgICAgICAvLyBNdXNjaU1uZy5tdXNpY1N0b3AoKVxyXG4gICAgICAgIC8vIE11c2NpTW5nLmVmZmVjdEFsbFN0b3AoKVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBtYWluSW5pdCgpIHtcclxuICAgICAgICAvLyBhd2FpdCBBc3NldE1uZy5jaGVja1N0YXRlKCk7XHJcbiAgICAgICAgLy8gTXVzY2lNbmcubXVzaWNQbGF5KFwiZ2FtZUJHXCIpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcuZWZmZWN0UGxheShcIkRvb3JPcGVuXCIpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcubXVzaWNTdG9wKClcclxuICAgICAgICAvLyBNdXNjaU1uZy5lZmZlY3RBbGxTdG9wKClcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9WZXJzaW9uLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiRG9vck9wZW5cIilcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3Iub3BlbkRvb3IoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfRG9vci5zY2FsZUFjdGlvbigpXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIm1hbmV5TWl4U291bmRcIilcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLnNob3dBbGxWaWV3KClcclxuICAgICAgICBhd2FpdCBuZXcgTXlEZWxheSgpLnNldERlbGF5KDAuNSlcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYSgpXHJcblxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9IDBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyID0gMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUgPSBUcmFpblR5cGUuVHlwZTBcclxuICAgICAgICAvLyB0aGlzLmVuZENob29zVHJhaW4oKVxyXG4gICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVGlja2V0LnNob3coKVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uID0gMjBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAxXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc2VUaWNrZXQoKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dRQSgpXHJcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0UHJvcHMoKVxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZENob29zZVRpY2tldCgpIHtcclxuICAgICAgICBHYW1lTW9kbGUucWFJbmRleCA9IDBcclxuICAgICAgICBHYW1lTW9kbGUucWFMaWJyYXJ5ID0gbmV3IFFBTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIDMpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5ID0gbmV3IENob29zZUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeSA9IG5ldyBBbnN3ZXJMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5ID0gbmV3IEV4cGxhaW5MaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUUHpoYzluqvvvJpcIiArIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfc3RyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumBuOWQke+8mlwiICsgR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWVj+etlO+8mlwiICsgR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnpaXop6PvvJpcIiArIEdhbWVNb2RsZS5leHBsYWluTGlicmFyeS5leHBsYWluTGliKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RpY2tldC5oaWRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmluaXRUcmFpblNwcml0ZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5zaG93KClcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRDaG9vc1RyYWluKCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBNeURlbGF5KCkuc2V0RGVsYXkoMilcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5zZXRNYW5TcHJpdGUoQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZSkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ucmVzZXRPZWcoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfQmVhci5pbml0KClcclxuICAgICAgICAvLyBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmdldFRyYWluQWNpdG9uKClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuY2hvb3NlX1RyYWluLmhpZGUoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgdGhpcy5zaG93VGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1RlYWNoaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5vcGVuVGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kVGVhY2hpbmcoKSB7XHJcbiAgICAgICAgR2FtZU1vZGxlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5TdGFydDtcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX1VJLnN0YXRpb24uY2hlbmdlU3ByaXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2V0QnRuRXZlbnQoKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyB3YWl0U2lnbmFsTGlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoZmFsc2UpXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLmlzV2FpdFNpbmduYWxMaW5naHQpIHJldHVyblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9PSBHYW1lU3RhdGUuV2FpdFNpZ25hbExpZ2h0KSByZXR1cm47XHJcbiAgICAgICAgLy8gdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFNpZ25hbExpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0b3AoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfQmVhci5jaGVja1N0YXRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkVuZFNpZ25hbExpZ2h0KClcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93VmlkZW8oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuU2hvd01lc3NhZ2VcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IHBvc3RDbWQoKVxyXG4gICAgICAgIE11c2NpTW5nLnN3aWNoRWZmZWN0KClcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaE11c2ljKClcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICBkYXRhLmtpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lronlhajlvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDIwOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdldEtpZCA9IEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCA9PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS52aWV3VHlwZSA9IDJcclxuICAgICAgICAgICAgICAgIGRhdGEua2lkID0gZ2V0S2lkO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5buJ5pS/5b2x54mHXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VWaWRlbygpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe30sIFwiKlwiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xvc2VWaWRlbygpIHtcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1FBKCkge1xyXG4gICAgICAgIGxldCBnZXRRQSA9IFwiXCJcclxuICAgICAgICBsZXQgZ2V0Q2hvb2VzZSA9IFwiXCJcclxuXHJcbiAgICAgICAgZ2V0UUEgPSBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF1cclxuICAgICAgICBnZXRDaG9vZXNlID0gR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliW0dhbWVNb2RsZS5xYUluZGV4XVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRRQUluZm8oZ2V0UUEsIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW1bR2FtZU1vZGxlLnFhSW5kZXhdKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRDaG9vc2UoZ2V0Q2hvb2VzZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5TaG93TWVzc2FnZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnF1ZXN0aW9uLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dBZ2FpblFBKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnF1ZXN0aW9uLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFFBKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93QW5zd2VyKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dBbnN3ZXIoKSB7XHJcbiAgICAgICAgbGV0IGdldEFuc3dlciA9IFwiXCJcclxuICAgICAgICBnZXRBbnN3ZXIgPSBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeS5hbnN3ZXJMaWJfc3RyW0dhbWVNb2RsZS5xYUluZGV4XS5zdWJzdHJpbmcoMCwgMSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIucmVzZXQoKVxyXG4gICAgICAgIGlmIChHYW1lTW9kbGUuY2hvb3NlQW5zd2VyID09IGdldEFuc3dlcikge1xyXG4gICAgICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiVHJ1ZVwiKVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIudHJ1ZUFuc3dlcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuZmFsc2VBbnN3ZXIoKVxyXG4gICAgICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiRmFsc2VcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRBbnN3ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNob3dHZXRQcm9wcygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd0V4cGxhaW4oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5zZXRJbmZvU3RyKEdhbWVNb2RsZS5leHBsYWluTGlicmFyeS5leHBsYWluTGliW0dhbWVNb2RsZS5xYUluZGV4XSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kRXhwbGFpbigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93U3RhdGlvbkluZm8oc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPT0gR2FtZVN0YXRlLlNob3dNZXNzYWdlKSByZXR1cm5cclxuICAgICAgICBpZiAoc2VsZWN0ID09IDUgfHwgc2VsZWN0ID09IDExIHx8IHNlbGVjdCA9PSAxNSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlICE9IEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5MaW5lV2FpdCgpXHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0VHJhaW5OYW1lKFRyYWluSW5mb0xpYnJhcnkuZ2V0TmFtZShzZWxlY3QpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5zdGF0aW9uSW5mby5zZXRTcHJpdGUoQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uSW5mb19cIiArIHNlbGVjdC50b1N0cmluZygpKSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0SW5mbyhUcmFpbkluZm9MaWJyYXJ5LmdldEluZm8oc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2hvdygpOyBgYFxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kVGF0aW9uSW5mbygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uaGlkZSgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dHZXRQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuc2V0RGF0YShcclxuICAgICAgICAgICAgUHJvcHNMaWJyYXJ5LmxpYi5nZXQodGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbiksXHJcbiAgICAgICAgICAgIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiR2V0UHJvcHNfXCIgKyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5zaG93KClcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLmdldFByb3BzKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkdldFByb3BzXCIpXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRHZXRQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICAgICAgR2FtZU1vZGxlLnFhSW5kZXgrKy8vK+WFqeWAi+WcsOaWueaYr+WboOeCuueOqeWutuacg+acieWIhuaUr++8jOWboOatpOWcqOWIhuaUr+eahOacq+err+WKoDFJbmRleFxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0YXRlID0gR2FtZVN0YXRlLlNob3dNZXNzYWdlXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5wbGF5QmVhclNwcml0ZShHYW1lTW9kbGUucGxheURhdGEudHJhaW5UeXBlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZUVuZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuaGlkZSgpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSA9IEdhbWVTdGF0ZS5XYWl0XHJcbiAgICB9XHJcbiAgICBhZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnb0xvdHRlcnkoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJtYW5leU1peFNvdW5kXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmJhY2tTY2FsZUFjdGlvbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmNsb3NlRG9vcigpXHJcbiAgICAgICAgTXVzY2lNbmcubXVzaWNTdG9wKClcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgIGRhdGEudmlld1R5cGUgPSAtMVxyXG4gICAgICAgIGRhdGEua2lkID0gZmFsc2VcclxuICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6YGK5oiy57WQ5p2fU2hvd+aKveeNjuiIh+WVj+etlFwiKTtcclxuXHJcbiAgICB9XHJcbiAgICBkb29yQWdhaW5HYW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIG1lbkdvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYUNvbnRyb2xsLmNhbWVyYVN0YXRlICE9IENhbWVyYVN0YXRlLk1lbikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYSgwLjMpXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYW5XYWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbldhaXQoKVxyXG4gICAgfVxyXG4gICAgbWFuTGluZVdhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgbW92ZVRhcmdldChzZWxlY3Q6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsX01hbi5tYW5TdGF0ZSAhPSBHYW1lU3RhdGUuV2FpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcChmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuTGluZVdhaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnJlc2V0KClcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1hbkNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNaW5lQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhQ29udHJvbGwubW92ZVRvU3RhdGlvbihHYW1lTW9kbGUubWFwSXRlbS5nZXQoc2VsZWN0KS5ub2RlKVxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0YVVJU3RhcnQoc2V0Qm9vbGVhOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3Aoc2V0Qm9vbGVhKVxyXG4gICAgfVxyXG4gICAgY2xpbmV0Q2xpY2tTdGFydF9TdG9wKCkge1xyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJCdG5DbGlja1wiKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4uaXNXYWl0U2luZ25hbExpbmdodCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoKVxyXG4gICAgICAgIC8v5q2j5Zyo6LWwXHJcbiAgICAgICAgaWYgKCF0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuaXNHbylcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuV2FpdCgpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgICAgICAgICAgdGhpcy5tZW5HbygpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG4gICAgc2hvd0FsbFZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYSh0cnVlKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpO1xyXG4gICAgfVxyXG4gICAgd2ViQ2hlY2tEYXRhKCkge1xyXG4gICAgICAgIGlmIChHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSkge1xyXG4gICAgICAgICAgICBHYW1lTW9kbGUuaXNFbmRMb2FkaW5nRGF0YSA9IGZhbHNlIC8v6YG/5YWN6YeN6KSH5pWyXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IHBvc3RDbWQoKVxyXG4gICAgICAgICAgICBkYXRhLmNtZCA9ICdDbG9zZSdcclxuICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgLy/plovlp4vpgYrmiLJcclxuICAgICAgICAgICAgdGhpcy5tYWluSW5pdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLmF1ZGlvRW5naW5lLmdldFN0YXRlKE11c2NpTW5nLm11c2ljSUQpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShNdXNjaU1uZy5lZmZlY3RJRC5nZXQoJ0Rvb3JPcGVuJykpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuato+WcqOaSreaUvuWXjj9cIiArIGNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuY2xhc3MgcG9zdENtZCB7XHJcbiAgICBjbWQ6IHN0cmluZ1xyXG4gICAgdmlld1R5cGU6IG51bWJlclxyXG4gICAga2lkOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG4iXX0=