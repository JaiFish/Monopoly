
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Controll = /** @class */ (function (_super) {
    __extends(Controll, _super);
    function Controll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Controll.prototype.onLoad = function () {
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
                    case 0: return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        _a.sent();
                        MusciMng_1.default.musicPlay("gameBG");
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.mainInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        _a.sent();
                        // MusciMng.musicPlay("gameBG")
                        // MusciMng.effectPlay("DoorOpen")
                        // MusciMng.musicStop()
                        // MusciMng.effectAllStop()
                        this.panel_Version.node.active = false;
                        MusciMng_1.default.effectPlay("DoorOpen");
                        return [4 /*yield*/, this.panel_Door.openDoor()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.scaleAction()];
                    case 3:
                        _a.sent();
                        MusciMng_1.default.effectPlay("maneyMixSound");
                        return [4 /*yield*/, this.cameraControll.showAllView()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, new DelayTime_1.MyDelay().setDelay(0.5)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.cameraControll.moveToManCamera(false)
                            // GameModle.playData.level = 0
                            // GameModle.playData.trainTypeNumber = 0
                            // GameModle.playData.trainType = TrainType.Type0
                            // this.endChoosTrain()
                            // return
                        ];
                    case 6:
                        _a.sent();
                        // GameModle.playData.level = 0
                        // GameModle.playData.trainTypeNumber = 0
                        // GameModle.playData.trainType = TrainType.Type0
                        // this.endChoosTrain()
                        // return
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 7:
                        // GameModle.playData.level = 0
                        // GameModle.playData.trainTypeNumber = 0
                        // GameModle.playData.trainType = TrainType.Type0
                        // this.endChoosTrain()
                        // return
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
                GameModle_1.default.qaLibrary = new QALibrary_1.default(GameModle_1.default.playData.level, 3);
                GameModle_1.default.chooseLibrary = new ChooseLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                GameModle_1.default.answerLibrary = new AnswerLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
                GameModle_1.default.explainLibrary = new ExplainLibrary_1.default(GameModle_1.default.playData.level, GameModle_1.default.qaLibrary.qaLib_num);
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
                this.cameraControll.activeManCamera(true);
                this.cameraControll.activeMineCamera(false);
                this.panel_UI.props_Feature.setStart_Stop(true);
                this.waitSignalLight();
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.waitSignalLight = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.panel_Man.manStop();
                        return [4 /*yield*/, this.panel_Bear.checkState()];
                    case 1:
                        _a.sent();
                        this.panel_Man.manGO();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controll.prototype.showVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        data = new postCmd();
                        MusciMng_1.default.swichEffect();
                        MusciMng_1.default.swichMusic();
                        switch (this.panel_Man.nowStation) {
                            case 1:
                                data.cmd = "OpenView";
                                data.viewType = 1;
                                GameModle_1.default.webPostMessage.send(data);
                                console.log("播放安全影片");
                                break;
                            case 2:
                                data.cmd = "OpenView";
                                data.viewType = 2;
                                data.level = GameModle_1.default.playData.level;
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
                        this.panel_UI.props_Feature.setStart_Stop(true);
                        if (this.panel_Man.nowStation == 20)
                            this.waitSignalLight();
                        else
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
                GameModle_1.default.qaIndex++; //+兩個地方是因為玩家會有分支，因此在分支的末端加1Index
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
                        if (select == 5 || select == 11 || select == 15)
                            return [2 /*return*/];
                        if (this.panel_Man.manState != GameState_1.GameState.Wait)
                            this.panel_Man.manLineWait();
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
                        this.panel_Message.stationInfo.setTrainName(TrainInfoLibrary_1.default.getName(select));
                        this.panel_Message.stationInfo.setSprite(AssetMng_1.default.data_SprtieAtlas.get("StationInfo_" + select.toString()));
                        this.panel_Message.stationInfo.setInfo(TrainInfoLibrary_1.default.getInfo(select));
                        this.panel_Message.stationInfo.show();
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
                console.log(this.panel_Man.nowStation);
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
                    case 0: return [4 /*yield*/, this.panel_Message.show()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGlEQUE0QztBQUU1Qyw4Q0FBMkM7QUFDM0MsbURBQThDO0FBQzlDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUFxV0EsQ0FBQztJQXRWRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMs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O0lBQ0QsZ0NBQWEsR0FBYixVQUFjLFNBQWtCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QiwwREFBMEQ7UUFDMUQsMkVBQTJFO1FBQzNFLDJEQUEyRDtJQUcvRCxDQUFDO0lBcFdnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcVc1QjtJQUFELGVBQUM7Q0FyV0QsQUFxV0MsQ0FyV3FDLHVCQUFhLEdBcVdsRDtrQkFyV29CLFFBQVE7QUF1VzdCO0lBQUE7SUFJQSxDQUFDO0lBQUQsY0FBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuL0Fzc2V0L0Fzc2V0TW5nXCI7XHJcbmltcG9ydCBDYW1lcmFDb250cm9sbCBmcm9tIFwiLi9DbGFzcy9DYW1lcmFDb250cm9sbFwiO1xyXG5pbXBvcnQgUGFuZWxfTWFuIGZyb20gXCIuL0NsYXNzL01hbS9QYW5lbF9NYW5cIjtcclxuaW1wb3J0IFBhbmVsX0FuaVBhdGggZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQW5pUGF0aFwiO1xyXG5pbXBvcnQgUGFuZWxfQ2xvdWQgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQ2xvdWRcIjtcclxuaW1wb3J0IFBhbmVsX0Rvb3IgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfRG9vclwiO1xyXG5pbXBvcnQgUGFuZWxfTWFwIGZyb20gXCIuL0NsYXNzL1BhbmVsX01hcFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuL0dhbWVNb2RsZVwiO1xyXG5pbXBvcnQgUGFuZWxfVUkgZnJvbSBcIi4vQ2xhc3MvVUkvUGFuZWxfVUlcIjtcclxuaW1wb3J0IFBhbmVsX01lc3NhZ2UgZnJvbSBcIi4vQ2xhc3MvTWVzc2FnZS9QYW5lbF9NZXNzYWdlXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IFBhbmVsX0JlYXIgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQmVhclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgQW5zd2VyTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Fuc3dlckxpYnJhcnlcIjtcclxuaW1wb3J0IEV4cGxhaW5MaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvRXhwbGFpbkxpYnJhcnlcIjtcclxuaW1wb3J0IFRyYWluSW5mb0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9UcmFpbkluZm9MaWJyYXJ5XCI7XHJcbmltcG9ydCBQcm9wc0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9Qcm9wc0xpYnJhcnlcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0NhbWVyYVN0YXRlXCI7XHJcbmltcG9ydCBQYW5lbF9WZXJzaW9uIGZyb20gXCIuL0NsYXNzL1BhbmVsX1ZlcnNpb25cIjtcclxuaW1wb3J0IFBhbmVsX1Rlc3QgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfVGVzdFwiO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tIFwiLi9FbnVtL1RyYWluVHlwZVwiO1xyXG5pbXBvcnQgeyBNeURlbGF5IH0gZnJvbSBcIi4vRGF0YS9EZWxheVRpbWVcIjtcclxuaW1wb3J0IFBhbmVsX0J1ZmVyIGZyb20gXCIuL0NsYXNzL1BhbmVsX0J1ZmVyXCI7XHJcbmltcG9ydCBNdXNjaU1uZyBmcm9tIFwiLi9EYXRhL2Jhc2UvTXVzY2lNbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbCBleHRlbmRzIENvbXBvbmVudEJhc2Uge1xyXG5cclxuICAgIHBhbmVsX0FuaVBhdGg6IFBhbmVsX0FuaVBhdGg7XHJcbiAgICBwYW5lbF9NYXA6IFBhbmVsX01hcDtcclxuICAgIHBhbmVsX01hbjogUGFuZWxfTWFuO1xyXG4gICAgY2FtZXJhQ29udHJvbGw6IENhbWVyYUNvbnRyb2xsO1xyXG4gICAgcGFuZWxfRG9vcjogUGFuZWxfRG9vcjtcclxuICAgIHBhbmVsX0Nsb3VkOiBQYW5lbF9DbG91ZDtcclxuICAgIHBhbmVsX1VJOiBQYW5lbF9VSTtcclxuICAgIHBhbmVsX01lc3NhZ2U6IFBhbmVsX01lc3NhZ2VcclxuICAgIHBhbmVsX0JlYXI6IFBhbmVsX0JlYXJcclxuICAgIHBhbmVsX1ZlcnNpb246IFBhbmVsX1ZlcnNpb25cclxuICAgIHBhbmVsX1Rlc3Q6IFBhbmVsX1Rlc3RcclxuICAgIHBhbmVsX0J1ZmVyOiBQYW5lbF9CdWZlclxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX0FuaVBhdGggPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX0FuaVBhdGhcIikuYWRkQ29tcG9uZW50KFBhbmVsX0FuaVBhdGgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFwID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYXBcIikuYWRkQ29tcG9uZW50KFBhbmVsX01hcCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4gPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01hblwiKS5hZGRDb21wb25lbnQoUGFuZWxfTWFuKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsID0gY2MuZmluZChcIkNhbnZhcy9NYWluQ2FtZXJhXCIpLmFkZENvbXBvbmVudChDYW1lcmFDb250cm9sbCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9Eb29yXCIpLmFkZENvbXBvbmVudChQYW5lbF9Eb29yKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0Nsb3VkID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9DbG91ZFwiKS5hZGRDb21wb25lbnQoUGFuZWxfQ2xvdWQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX1VJXCIpLmFkZENvbXBvbmVudChQYW5lbF9VSSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9CZWFyID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9CZWFyXCIpLmFkZENvbXBvbmVudChQYW5lbF9CZWFyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX0J1ZmVyID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9CdWZlclwiKS5hZGRDb21wb25lbnQoUGFuZWxfQnVmZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01lc3NhZ2VcIikuYWRkQ29tcG9uZW50KFBhbmVsX01lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbiA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVmVyc2lvblwiKS5hZGRDb21wb25lbnQoUGFuZWxfVmVyc2lvbik7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfVGVzdCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVGVzdFwiKS5hZGRDb21wb25lbnQoUGFuZWxfVGVzdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kTW9kZWwsIHRoaXMuc2VuZE1vZGxlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgdGhpcy5zZW5kQ29tbWFuZClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuR2V0U3RhdGlvbiwgdGhpcy5jaGFuZ2VTdGF0aW9uU3ByaXRlKVxyXG5cclxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTClcclxuICAgICAgICAvLyBjYy52aWV3LmVuYWJsZUF1dG9GdWxsU2NyZWVuKHRydWUpO1xyXG5cclxuICAgICAgICBBc3NldE1uZy5zdGFydExvYWQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcEl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZjYyk7XHJcbiAgICAgICAgZmNjLmNvbmZpZ01nclxyXG4gICAgICAgICAgICAuYnVpbGQoKVxyXG4gICAgICAgIGxldCB1cGRhdGVUaW1lID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgPyA1MDAgOiAxMDBcclxuICAgICAgICBmY2Muc2NlbmVNZ3Iuc2NlbmVEaXJlY3Rpb24gPSBmY2MudHlwZS5TY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIodXBkYXRlVGltZSlcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBNdXNjaU1uZy5pbml0KClcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24uc2V0VmVyc2lvbihHYW1lTW9kbGUudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5zZW5kTW9kbGUoR2FtZUV2ZW50LkluaXRNYXApO1xyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5DbG9zZUJ1ZmVyKVxyXG4gICAgICAgIEdhbWVNb2RsZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIEdhbWVNb2RsZS53ZWJQb3N0TWVzc2FnZS5jb25uZWN0KClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yLnJlc2V0KClcclxuICAgICAgICB0aGlzLmNoZWNrRGF0YSgpXHJcbiAgICAgICAgLy8gdGhpcy5tYWluSW5pdCgpXHJcbiAgICB9XHJcbiAgICBzZW5kTW9kbGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkluaXRNYXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdCh0eXBlLCB0aGlzLnBhbmVsX0FuaVBhdGguVFdQYXRoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CZWFyU2V0TW9kbGU6XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LlNldE1vZGVsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQodHlwZSwgR2FtZU1vZGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkV2ZW50RW1pdCh0eXBlKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGlvblNwcml0ZShfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoX251bWJlciA8IDIgfHwgX251bWJlciA+IDE5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IEdhbWVNb2RsZS5tYXBTcHJpdGUuZ2V0KF9udW1iZXIpXHJcbiAgICAgICAgaWYgKF9jbGFzcy5pc0dldCkgcmV0dXJuO1xyXG4gICAgICAgIF9jbGFzcy5teVNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9cIiArIF9udW1iZXIudG9TdHJpbmcoKSlcclxuICAgICAgICBfY2xhc3MuZ2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZW5kQ29tbWFuZCh0eXBlOiBDb21tYW1uZCwgLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0oLi4uYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqItcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2hlY2tEYXRhKCkge1xyXG5cclxuICAgICAgICBhd2FpdCBBc3NldE1uZy5jaGVja1N0YXRlKCk7XHJcblxyXG4gICAgICAgIE11c2NpTW5nLm11c2ljUGxheShcImdhbWVCR1wiKVxyXG4gICAgICAgIC8vIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJEb29yT3BlblwiKVxyXG4gICAgICAgIC8vIE11c2NpTW5nLm11c2ljU3RvcCgpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcuZWZmZWN0QWxsU3RvcCgpXHJcbiAgICAgICAgICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAwXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnFhTGlicmFyeSA9IG5ldyBRQUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCAzKTtcclxuICAgICAgICAvLyBHYW1lTW9kbGUuY2hvb3NlTGlicmFyeSA9IG5ldyBDaG9vc2VMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkgPSBuZXcgQW5zd2VyTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5leHBsYWluTGlicmFyeSA9IG5ldyBFeHBsYWluTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIEdhbWVNb2RsZS5xYUxpYnJhcnkucWFMaWJfbnVtKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX3N0cik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coR2FtZU1vZGxlLmNob29zZUxpYnJhcnkuY2hvb3NlTGliKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUuYW5zd2VyTGlicmFyeS5hbnN3ZXJMaWJfc3RyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkuZXhwbGFpbkxpYik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhc3luYyBtYWluSW5pdCgpIHtcclxuICAgICAgICBhd2FpdCBBc3NldE1uZy5jaGVja1N0YXRlKCk7XHJcbiAgICAgICAgLy8gTXVzY2lNbmcubXVzaWNQbGF5KFwiZ2FtZUJHXCIpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcuZWZmZWN0UGxheShcIkRvb3JPcGVuXCIpXHJcbiAgICAgICAgLy8gTXVzY2lNbmcubXVzaWNTdG9wKClcclxuICAgICAgICAvLyBNdXNjaU1uZy5lZmZlY3RBbGxTdG9wKClcclxuXHJcbiAgICAgICAgdGhpcy5wYW5lbF9WZXJzaW9uLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiRG9vck9wZW5cIilcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3Iub3BlbkRvb3IoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfRG9vci5zY2FsZUFjdGlvbigpXHJcbiAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIm1hbmV5TWl4U291bmRcIilcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLnNob3dBbGxWaWV3KClcclxuICAgICAgICBhd2FpdCBuZXcgTXlEZWxheSgpLnNldERlbGF5KDAuNSlcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYShmYWxzZSlcclxuXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIgPSAwXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZSA9IFRyYWluVHlwZS5UeXBlMFxyXG4gICAgICAgIC8vIHRoaXMuZW5kQ2hvb3NUcmFpbigpXHJcbiAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVGlja2V0LnNob3coKVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uID0gMjBcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAxXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc2VUaWNrZXQoKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dRQSgpXHJcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0UHJvcHMoKVxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZENob29zZVRpY2tldCgpIHtcclxuICAgICAgICBHYW1lTW9kbGUucWFMaWJyYXJ5ID0gbmV3IFFBTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIDMpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5ID0gbmV3IENob29zZUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeSA9IG5ldyBBbnN3ZXJMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5ID0gbmV3IEV4cGxhaW5MaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UaWNrZXQuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5pbml0VHJhaW5TcHJpdGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVHJhaW4uc2hvdygpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQ2hvb3NUcmFpbigpIHtcclxuICAgICAgICBhd2FpdCBuZXcgTXlEZWxheSgpLnNldERlbGF5KDIpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4uc2V0TWFuU3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLnJlc2V0T2VnKClcclxuICAgICAgICB0aGlzLnBhbmVsX0JlYXIuaW5pdCgpXHJcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5nZXRUcmFpbkFjaXRvbigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5zaG93VGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1RlYWNoaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5vcGVuVGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kVGVhY2hpbmcoKSB7XHJcbiAgICAgICAgR2FtZU1vZGxlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5TdGFydDtcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX1VJLnN0YXRpb24uY2hlbmdlU3ByaXQoKVxyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1hbkNhbWVyYSh0cnVlKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1pbmVDYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHRydWUpXHJcbiAgICAgICAgdGhpcy53YWl0U2lnbmFsTGlnaHQoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgd2FpdFNpZ25hbExpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hblN0b3AoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfQmVhci5jaGVja1N0YXRlKClcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93VmlkZW8oKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGRhdGEuY21kID0gXCJPcGVuVmlld1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLnZpZXdUeXBlID0gMVxyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5a6J5YWo5b2x54mHXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAyXHJcbiAgICAgICAgICAgICAgICBkYXRhLmxldmVsID0gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgR2FtZU1vZGxlLndlYlBvc3RNZXNzYWdlLnNlbmQoZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5buJ5pS/5b2x54mHXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VWaWRlbygpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe30sIFwiKlwiKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xvc2VWaWRlbygpIHtcclxuICAgICAgICBNdXNjaU1uZy5zd2ljaEVmZmVjdCgpXHJcbiAgICAgICAgTXVzY2lNbmcuc3dpY2hNdXNpYygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24gPT0gMjApXHJcbiAgICAgICAgICAgIHRoaXMud2FpdFNpZ25hbExpZ2h0KClcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93UUEoKSB7XHJcbiAgICAgICAgbGV0IGdldFFBID0gXCJcIlxyXG4gICAgICAgIGxldCBnZXRDaG9vZXNlID0gXCJcIlxyXG4gICAgICAgIGdldFFBID0gR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9zdHJbR2FtZU1vZGxlLnFhSW5kZXhdXHJcbiAgICAgICAgZ2V0Q2hvb2VzZSA9IEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYltHYW1lTW9kbGUucWFJbmRleF1cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRRQUluZm8oZ2V0UUEsIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW1bR2FtZU1vZGxlLnFhSW5kZXhdKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRDaG9vc2UoZ2V0Q2hvb2VzZSlcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QWdhaW5RQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRRQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Fuc3dlcigpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCBnZXRBbnN3ZXIgPSBcIlwiXHJcbiAgICAgICAgZ2V0QW5zd2VyID0gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF0uc3Vic3RyaW5nKDAsIDEpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnJlc2V0KClcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmNob29zZUFuc3dlciA9PSBnZXRBbnN3ZXIpIHtcclxuICAgICAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIlRydWVcIilcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnRydWVBbnN3ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLmZhbHNlQW5zd2VyKClcclxuICAgICAgICAgICAgTXVzY2lNbmcuZWZmZWN0UGxheShcIkZhbHNlXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQW5zd2VyKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFeHBsYWluKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2V0SW5mb1N0cihHYW1lTW9kbGUuZXhwbGFpbkxpYnJhcnkuZXhwbGFpbkxpYltHYW1lTW9kbGUucWFJbmRleF0pO1xyXG4gICAgICAgIEdhbWVNb2RsZS5xYUluZGV4KysvLyvlhanlgIvlnLDmlrnmmK/lm6DngrrnjqnlrrbmnIPmnInliIbmlK/vvIzlm6DmraTlnKjliIbmlK/nmoTmnKvnq6/liqAxSW5kZXhcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRFeHBsYWluKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5leHBsYWluLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNob3dHZXRQcm9wcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dTdGF0aW9uSW5mbyhzZWxlY3Q6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzZWxlY3QgPT0gNSB8fCBzZWxlY3QgPT0gMTEgfHwgc2VsZWN0ID09IDE1KSByZXR1cm5cclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgIT0gR2FtZVN0YXRlLldhaXQpXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0VHJhaW5OYW1lKFRyYWluSW5mb0xpYnJhcnkuZ2V0TmFtZShzZWxlY3QpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5zdGF0aW9uSW5mby5zZXRTcHJpdGUoQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJTdGF0aW9uSW5mb19cIiArIHNlbGVjdC50b1N0cmluZygpKSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0SW5mbyhUcmFpbkluZm9MaWJyYXJ5LmdldEluZm8oc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kVGF0aW9uSW5mbygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uaGlkZSgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2hvd0dldFByb3BzKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5zZXREYXRhKFxyXG4gICAgICAgICAgICBQcm9wc0xpYnJhcnkubGliLmdldCh0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uKSxcclxuICAgICAgICAgICAgQXNzZXRNbmcuZGF0YV9TcHJ0aWVBdGxhcy5nZXQoXCJHZXRQcm9wc19cIiArIHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24udG9TdHJpbmcoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmdldFByb3BzLnNob3coKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuZ2V0UHJvcHModGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbilcclxuICAgICAgICBNdXNjaU1uZy5lZmZlY3RQbGF5KFwiR2V0UHJvcHNcIilcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEdldFByb3BzKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5xYUluZGV4KysvLyvlhanlgIvlnLDmlrnmmK/lm6DngrrnjqnlrrbmnIPmnInliIbmlK/vvIzlm6DmraTlnKjliIbmlK/nmoTmnKvnq6/liqAxSW5kZXhcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFbmRHYW1lKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUucGxheUJlYXJTcHJpdGUoR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY2xvc2VFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5lbmRHYW1lLmhpZGUoKVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBhZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnb0xvdHRlcnkoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUVuZEdhbWUoKVxyXG4gICAgICAgIE11c2NpTW5nLmVmZmVjdFBsYXkoXCJtYW5leU1peFNvdW5kXCIpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5zaG93QWxsVmlldygpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmJhY2tTY2FsZUFjdGlvbigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLmNsb3NlRG9vcigpXHJcbiAgICB9XHJcbiAgICBkb29yQWdhaW5HYW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTZW5jZVwiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIG1lbkdvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYUNvbnRyb2xsLmNhbWVyYVN0YXRlICE9IENhbWVyYVN0YXRlLk1lbilcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5tb3ZlVG9NYW5DYW1lcmEoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIG1hbldhaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuV2FpdCgpXHJcbiAgICB9XHJcbiAgICBtYW5MaW5lV2FpdCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5MaW5lV2FpdCgpXHJcbiAgICB9XHJcbiAgICBhc3luYyBtb3ZlVGFyZ2V0KHNlbGVjdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlICE9IEdhbWVTdGF0ZS5XYWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5MaW5lV2FpdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUNvbnRyb2xsLmFjdGl2ZU1pbmVDYW1lcmEodHJ1ZSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFDb250cm9sbC5tb3ZlVG9TdGF0aW9uKEdhbWVNb2RsZS5tYXBJdGVtLmdldChzZWxlY3QpLm5vZGUpXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRhVUlTdGFydChzZXRCb29sZWE6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcChzZXRCb29sZWEpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShNdXNjaU1uZy5tdXNpY0lEKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUoTXVzY2lNbmcuZWZmZWN0SUQuZ2V0KCdEb29yT3BlbicpKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmraPlnKjmkq3mlL7ll44/XCIgKyBjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKTtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBwb3N0Q21kIHtcclxuICAgIGNtZDogc3RyaW5nXHJcbiAgICB2aWV3VHlwZTogbnVtYmVyXHJcbiAgICBsZXZlbDogbnVtYmVyXHJcbn1cclxuXHJcblxyXG4iXX0=