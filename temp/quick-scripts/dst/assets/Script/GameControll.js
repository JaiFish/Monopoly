
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
var Panel_Teaching_1 = require("./Class/Panel_Teaching");
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
        this.panel_Teaching = cc.find("Canvas/Panel_Teaching").addComponent(Panel_Teaching_1.default);
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
        this.panel_Version.setVersion(GameModle_1.default.version);
        this.sendModle(GameEvent_1.GameEvent.InitMap);
        this.EventEmit(GameEvent_1.GameEvent.CloseBufer);
        GameModle_1.default.gameState = GameState_1.GameState.Wait;
        GameModle_1.default.webPostMessage.connect();
        this.panel_Message.node.opacity = 255;
        this.panel_Door.reset();
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
    Controll.prototype.mainInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AssetMng_1.default.checkState()];
                    case 1:
                        _a.sent();
                        this.panel_Version.node.active = false;
                        return [4 /*yield*/, this.panel_Door.openDoor()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.panel_Door.scaleAction()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.cameraControll.showAllView()];
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
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 6:
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
                this.panel_Teaching.show();
                this.panel_Teaching.info0.active = true;
                return [2 /*return*/];
            });
        });
    };
    Controll.prototype.endTeaching = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.panel_Teaching.hide();
                GameModle_1.default.gameState = GameState_1.GameState.Start;
                // this.panel_UI.station.chengeSprit()
                this.cameraControll.activeManCamera(true);
                this.cameraControll.activeMineCamera(false);
                this.panel_UI.props_Feature.setStart_Stop(true);
                this.panel_Man.manGO();
                return [2 /*return*/];
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
                    case 0: return [4 /*yield*/, this.panel_Message.hide()];
                    case 1:
                        _a.sent();
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
                    this.panel_Message.qaAnswer.trueAnswer();
                }
                else
                    this.panel_Message.qaAnswer.falseAnswer();
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
                    case 0:
                        this.panel_Message.endGame.playBearSprite(GameModle_1.default.playData.trainTypeNumber);
                        return [4 /*yield*/, this.panel_Message.show()];
                    case 1:
                        _a.sent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29udHJvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsK0NBQTBDO0FBQzFDLDhDQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsaURBQTRDO0FBQzVDLDhDQUE2QztBQUM3QyxpREFBNEM7QUFDNUMseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQsdURBQWtEO0FBQ2xELGlEQUE0QztBQUU1Qyw4Q0FBMkM7QUFDM0MsbURBQThDO0FBQzlDLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBYTtJQUFuRDs7SUErU0EsQ0FBQztJQS9SRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBRTlELDJFQUEyRTtRQUMzRSxzQ0FBc0M7UUFFdEMsa0JBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLEdBQUcsQ0FBQyxTQUFTO2FBQ1IsS0FBSyxFQUFFLENBQUE7UUFDWixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDdkQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUE7UUFDbkUsR0FBRyxDQUFDLFFBQVE7YUFDUCxlQUFlLENBQUMsR0FBRyxDQUFDO2FBQ3BCLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDcEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUM5QyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFbEMsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEMsbUJBQVMsQ0FBQyxTQUFTLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUE7UUFDcEMsbUJBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRXZCLGtCQUFrQjtJQUN0QixDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLHFCQUFTLENBQUMsT0FBTztnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsTUFBTTtZQUNWLEtBQUsscUJBQVMsQ0FBQyxZQUFZLENBQUM7WUFDNUIsS0FBSyxxQkFBUyxDQUFDLFFBQVE7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtTQUNiO1FBQ0QsdUJBQXVCO0lBQzNCLENBQUM7SUFDRCxzQ0FBbUIsR0FBbkIsVUFBb0IsT0FBZTtRQUMvQixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUU7WUFBRSxPQUFPO1FBQ3hDLElBQUksTUFBTSxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM3QyxJQUFJLE1BQU0sQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDNUYsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksSUFBYztRQUFFLGFBQWE7YUFBYixVQUFhLEVBQWIscUJBQWEsRUFBYixJQUFhO1lBQWIsNEJBQWE7O1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBVixJQUFJLEVBQVUsR0FBRyxFQUFDO0lBQ3RCLENBQUM7SUFDRDs7T0FFRztJQUNHLDJCQUFRLEdBQWQ7Ozs7NEJBRUkscUJBQU0sa0JBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7d0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7d0JBQ3RDLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFBO3dCQUNoQyxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBbkMsU0FBbUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUE7d0JBQ3ZDLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQzs0QkFFaEQsK0JBQStCOzRCQUMvQix5Q0FBeUM7NEJBQ3pDLGlEQUFpRDs0QkFDakQsdUJBQXVCOzRCQUN2QixTQUFTOzBCQU51Qzs7d0JBQWhELFNBQWdELENBQUE7d0JBRWhELCtCQUErQjt3QkFDL0IseUNBQXlDO3dCQUN6QyxpREFBaUQ7d0JBQ2pELHVCQUF1Qjt3QkFDdkIsU0FBUzt3QkFDVCxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFML0IsK0JBQStCO3dCQUMvQix5Q0FBeUM7d0JBQ3pDLGlEQUFpRDt3QkFDakQsdUJBQXVCO3dCQUN2QixTQUFTO3dCQUNULFNBQStCLENBQUE7d0JBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFBOzs7OztLQVUxQztJQUNLLGtDQUFlLEdBQXJCOzs7Z0JBQ0ksbUJBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakUsbUJBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDcEcsbUJBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDcEcsbUJBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSx3QkFBYyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFBO2dCQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7OztLQUV6QztJQUNLLGdDQUFhLEdBQW5COzs7OzRCQUNJLHFCQUFNLElBQUksbUJBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUE7d0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7d0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ3RCLHlEQUF5RDt3QkFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ3RDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFBO3dCQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7Ozs7O0tBQ3RCO0lBQ0ssK0JBQVksR0FBbEI7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBOzs7O0tBQzFDO0lBQ0ssOEJBQVcsR0FBakI7OztnQkFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixtQkFBUyxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLEtBQUssQ0FBQztnQkFDdEMsc0NBQXNDO2dCQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBOzs7O0tBQ3pCO0lBQ0ssNEJBQVMsR0FBZjs7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQzVCLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO3dCQUN4QixRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFOzRCQUMvQixLQUFLLENBQUM7Z0NBQ0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUE7Z0NBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO2dDQUNqQixtQkFBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0NBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3RCLE1BQUs7NEJBQ1QsS0FBSyxDQUFDO2dDQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFBO2dDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtnQ0FDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0NBQ3RDLG1CQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQ0FDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDdEIsTUFBSzt5QkFDWjs7Ozs7S0FJSjtJQUNLLDZCQUFVLEdBQWhCOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7Ozs7O0tBQ3pCO0lBQ0sseUJBQU0sR0FBWjs7Ozs7O3dCQUNRLEtBQUssR0FBRyxFQUFFLENBQUE7d0JBQ1YsVUFBVSxHQUFHLEVBQUUsQ0FBQTt3QkFDbkIsS0FBSyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO3dCQUN4RCxVQUFVLEdBQUcsbUJBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7d0JBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO3dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLG1CQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO3dCQUN4SCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUE7d0JBQ2pELHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7S0FDdEM7SUFDSyw4QkFBVyxHQUFqQjs7O2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztLQUN0QztJQUNLLHdCQUFLLEdBQVg7OztnQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBOzs7O0tBQ3BCO0lBQ0ssNkJBQVUsR0FBaEI7Ozs7Z0JBQ1EsU0FBUyxHQUFHLEVBQUUsQ0FBQTtnQkFDbEIsU0FBUyxHQUFHLG1CQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNuQyxJQUFJLG1CQUFTLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7aUJBQzNDOztvQkFFRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7S0FDdEM7SUFDSyw0QkFBUyxHQUFmOzs7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztLQUN2QjtJQUNLLDhCQUFXLEdBQWpCOzs7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxtQkFBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixtQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUEsZ0NBQWdDO2dCQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztLQUNyQztJQUNLLDZCQUFVLEdBQWhCOzs7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztLQUN2QjtJQUVLLGtDQUFlLEdBQXJCLFVBQXNCLE1BQWM7Ozs7O3dCQUNoQyxJQUFJLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRTs0QkFBRSxzQkFBTTt3QkFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxxQkFBUyxDQUFDLElBQUk7NEJBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7d0JBRWhDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsMEJBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7d0JBQzdFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLDBCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO3dCQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7S0FDekM7SUFDSyxnQ0FBYSxHQUFuQjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDOzs7OztLQUNuQztJQUVLLCtCQUFZLEdBQWxCOzs7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUMvQixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDL0Msa0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQ3BGLENBQUE7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7Ozs7S0FDckM7SUFDSyw4QkFBVyxHQUFqQjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxtQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUEsZ0NBQWdDO3dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7Ozs7O0tBQ3pCO0lBQ0ssOEJBQVcsR0FBakI7Ozs7O3dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDOUUscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztLQUVyQztJQUNLLCtCQUFZLEdBQWxCOzs7Ozt3QkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTt3QkFDakMscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7Ozs7O0tBQ25DO0lBQ0QsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUssNEJBQVMsR0FBZjs7Ozs7d0JBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO3dCQUNuQixxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQTt3QkFDdkMscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUE7d0JBQ3ZDLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUFqQyxTQUFpQyxDQUFBOzs7OztLQUNwQztJQUNELGdDQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0ssd0JBQUssR0FBWDs7Ozs7NkJBQ1EsQ0FBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsSUFBSSx5QkFBVyxDQUFDLEdBQUcsQ0FBQSxFQUFsRCx3QkFBa0Q7d0JBQ2xELHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQUEzQyxTQUEyQyxDQUFBOzs7d0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7Ozs7O0tBQ3pCO0lBQ0QsMEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUNELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFDSyw2QkFBVSxHQUFoQixVQUFpQixNQUFjOzs7Ozt3QkFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxxQkFBUyxDQUFDLElBQUksRUFBRTs0QkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFBO3lCQUMvQjt3QkFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTt3QkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNDLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTNFLFNBQTJFLENBQUE7Ozs7O0tBRTlFO0lBQ0QsZ0NBQWEsR0FBYixVQUFjLFNBQWtCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBOVNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK1M1QjtJQUFELGVBQUM7Q0EvU0QsQUErU0MsQ0EvU3FDLHVCQUFhLEdBK1NsRDtrQkEvU29CLFFBQVE7QUFpVDdCO0lBQUE7SUFJQSxDQUFDO0lBQUQsY0FBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0TW5nIGZyb20gXCIuL0Fzc2V0L0Fzc2V0TW5nXCI7XHJcbmltcG9ydCBDYW1lcmFDb250cm9sbCBmcm9tIFwiLi9DbGFzcy9DYW1lcmFDb250cm9sbFwiO1xyXG5pbXBvcnQgUGFuZWxfTWFuIGZyb20gXCIuL0NsYXNzL01hbS9QYW5lbF9NYW5cIjtcclxuaW1wb3J0IFBhbmVsX0FuaVBhdGggZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQW5pUGF0aFwiO1xyXG5pbXBvcnQgUGFuZWxfQ2xvdWQgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQ2xvdWRcIjtcclxuaW1wb3J0IFBhbmVsX0Rvb3IgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfRG9vclwiO1xyXG5pbXBvcnQgUGFuZWxfTWFwIGZyb20gXCIuL0NsYXNzL1BhbmVsX01hcFwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FbnVtL0dhbWVFdmVudFwiO1xyXG5pbXBvcnQgR2FtZU1vZGxlIGZyb20gXCIuL0dhbWVNb2RsZVwiO1xyXG5pbXBvcnQgUGFuZWxfVUkgZnJvbSBcIi4vQ2xhc3MvVUkvUGFuZWxfVUlcIjtcclxuaW1wb3J0IFBhbmVsX01lc3NhZ2UgZnJvbSBcIi4vQ2xhc3MvTWVzc2FnZS9QYW5lbF9NZXNzYWdlXCI7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlIGZyb20gXCIuL0RhdGEvYmFzZS9Db21wb25lbnRCYXNlXCI7XHJcbmltcG9ydCB7IENvbW1hbW5kIH0gZnJvbSBcIi4vRW51bS9Db21tYWRcIjtcclxuaW1wb3J0IFBhbmVsX0JlYXIgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfQmVhclwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgUUFMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvUUFMaWJyYXJ5XCI7XHJcbmltcG9ydCBDaG9vc2VMaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvQ2hvb3NlTGlicmFyeVwiO1xyXG5pbXBvcnQgQW5zd2VyTGlicmFyeSBmcm9tIFwiLi9EYXRhL1FBL0Fuc3dlckxpYnJhcnlcIjtcclxuaW1wb3J0IEV4cGxhaW5MaWJyYXJ5IGZyb20gXCIuL0RhdGEvUUEvRXhwbGFpbkxpYnJhcnlcIjtcclxuaW1wb3J0IFRyYWluSW5mb0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9UcmFpbkluZm9MaWJyYXJ5XCI7XHJcbmltcG9ydCBQcm9wc0xpYnJhcnkgZnJvbSBcIi4vRGF0YS9RQS9Qcm9wc0xpYnJhcnlcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU3RhdGUgfSBmcm9tIFwiLi9FbnVtL0NhbWVyYVN0YXRlXCI7XHJcbmltcG9ydCBQYW5lbF9WZXJzaW9uIGZyb20gXCIuL0NsYXNzL1BhbmVsX1ZlcnNpb25cIjtcclxuaW1wb3J0IFBhbmVsX1Rlc3QgZnJvbSBcIi4vQ2xhc3MvUGFuZWxfVGVzdFwiO1xyXG5pbXBvcnQgeyBUcmFpblR5cGUgfSBmcm9tIFwiLi9FbnVtL1RyYWluVHlwZVwiO1xyXG5pbXBvcnQgeyBNeURlbGF5IH0gZnJvbSBcIi4vRGF0YS9EZWxheVRpbWVcIjtcclxuaW1wb3J0IFBhbmVsX0J1ZmVyIGZyb20gXCIuL0NsYXNzL1BhbmVsX0J1ZmVyXCI7XHJcbmltcG9ydCBQYW5lbF9UZWFjaGluZyBmcm9tIFwiLi9DbGFzcy9QYW5lbF9UZWFjaGluZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsIGV4dGVuZHMgQ29tcG9uZW50QmFzZSB7XHJcblxyXG4gICAgcGFuZWxfQW5pUGF0aDogUGFuZWxfQW5pUGF0aDtcclxuICAgIHBhbmVsX01hcDogUGFuZWxfTWFwO1xyXG4gICAgcGFuZWxfTWFuOiBQYW5lbF9NYW47XHJcbiAgICBjYW1lcmFDb250cm9sbDogQ2FtZXJhQ29udHJvbGw7XHJcbiAgICBwYW5lbF9Eb29yOiBQYW5lbF9Eb29yO1xyXG4gICAgcGFuZWxfQ2xvdWQ6IFBhbmVsX0Nsb3VkO1xyXG4gICAgcGFuZWxfVUk6IFBhbmVsX1VJO1xyXG4gICAgcGFuZWxfTWVzc2FnZTogUGFuZWxfTWVzc2FnZVxyXG4gICAgcGFuZWxfQmVhcjogUGFuZWxfQmVhclxyXG4gICAgcGFuZWxfVmVyc2lvbjogUGFuZWxfVmVyc2lvblxyXG4gICAgcGFuZWxfVGVzdDogUGFuZWxfVGVzdFxyXG4gICAgcGFuZWxfQnVmZXI6IFBhbmVsX0J1ZmVyXHJcbiAgICBwYW5lbF9UZWFjaGluZzogUGFuZWxfVGVhY2hpbmdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9BbmlQYXRoID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9BbmlQYXRoXCIpLmFkZENvbXBvbmVudChQYW5lbF9BbmlQYXRoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX01hcCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfTWFwXCIpLmFkZENvbXBvbmVudChQYW5lbF9NYXApO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9NYW5cIikuYWRkQ29tcG9uZW50KFBhbmVsX01hbik7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbCA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbkNhbWVyYVwiKS5hZGRDb21wb25lbnQoQ2FtZXJhQ29udHJvbGwpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfRG9vciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfRG9vclwiKS5hZGRDb21wb25lbnQoUGFuZWxfRG9vcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9DbG91ZCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQ2xvdWRcIikuYWRkQ29tcG9uZW50KFBhbmVsX0Nsb3VkKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1VJID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9VSVwiKS5hZGRDb21wb25lbnQoUGFuZWxfVUkpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfQmVhciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQmVhclwiKS5hZGRDb21wb25lbnQoUGFuZWxfQmVhcik7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9CdWZlciA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfQnVmZXJcIikuYWRkQ29tcG9uZW50KFBhbmVsX0J1ZmVyKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1RlYWNoaW5nID0gY2MuZmluZChcIkNhbnZhcy9QYW5lbF9UZWFjaGluZ1wiKS5hZGRDb21wb25lbnQoUGFuZWxfVGVhY2hpbmcpO1xyXG5cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UgPSBjYy5maW5kKFwiQ2FudmFzL1BhbmVsX01lc3NhZ2VcIikuYWRkQ29tcG9uZW50KFBhbmVsX01lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfVmVyc2lvbiA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVmVyc2lvblwiKS5hZGRDb21wb25lbnQoUGFuZWxfVmVyc2lvbik7XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfVGVzdCA9IGNjLmZpbmQoXCJDYW52YXMvUGFuZWxfVGVzdFwiKS5hZGRDb21wb25lbnQoUGFuZWxfVGVzdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kTW9kZWwsIHRoaXMuc2VuZE1vZGxlKVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KEdhbWVFdmVudC5TZW5kQ29tbWFuZCwgdGhpcy5zZW5kQ29tbWFuZClcclxuICAgICAgICB0aGlzLmluaXRFdmVudChHYW1lRXZlbnQuR2V0U3RhdGlvbiwgdGhpcy5jaGFuZ2VTdGF0aW9uU3ByaXRlKVxyXG5cclxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTClcclxuICAgICAgICAvLyBjYy52aWV3LmVuYWJsZUF1dG9GdWxsU2NyZWVuKHRydWUpO1xyXG5cclxuICAgICAgICBBc3NldE1uZy5zdGFydExvYWQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcEl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZjYyk7XHJcbiAgICAgICAgZmNjLmNvbmZpZ01nclxyXG4gICAgICAgICAgICAuYnVpbGQoKVxyXG4gICAgICAgIGxldCB1cGRhdGVUaW1lID0gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgPyA1MDAgOiAxMDBcclxuICAgICAgICBmY2Muc2NlbmVNZ3Iuc2NlbmVEaXJlY3Rpb24gPSBmY2MudHlwZS5TY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIodXBkYXRlVGltZSlcclxuXHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24uc2V0VmVyc2lvbihHYW1lTW9kbGUudmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5zZW5kTW9kbGUoR2FtZUV2ZW50LkluaXRNYXApO1xyXG4gICAgICAgIHRoaXMuRXZlbnRFbWl0KEdhbWVFdmVudC5DbG9zZUJ1ZmVyKVxyXG4gICAgICAgIEdhbWVNb2RsZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuV2FpdFxyXG4gICAgICAgIEdhbWVNb2RsZS53ZWJQb3N0TWVzc2FnZS5jb25uZWN0KClcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uubm9kZS5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgdGhpcy5wYW5lbF9Eb29yLnJlc2V0KClcclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYWluSW5pdCgpXHJcbiAgICB9XHJcbiAgICBzZW5kTW9kbGUodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LkluaXRNYXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkV2ZW50RW1pdCh0eXBlLCB0aGlzLnBhbmVsX0FuaVBhdGguVFdQYXRoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVFdmVudC5CZWFyU2V0TW9kbGU6XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUV2ZW50LlNldE1vZGVsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5FdmVudEVtaXQodHlwZSwgR2FtZU1vZGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLkV2ZW50RW1pdCh0eXBlKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGlvblNwcml0ZShfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoX251bWJlciA8IDIgfHwgX251bWJlciA+IDE5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IF9jbGFzcyA9IEdhbWVNb2RsZS5tYXBTcHJpdGUuZ2V0KF9udW1iZXIpXHJcbiAgICAgICAgaWYgKF9jbGFzcy5pc0dldCkgcmV0dXJuO1xyXG4gICAgICAgIF9jbGFzcy5teVNwcml0ZS5zcHJpdGVGcmFtZSA9IEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbl9cIiArIF9udW1iZXIudG9TdHJpbmcoKSlcclxuICAgICAgICBfY2xhc3MuZ2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZW5kQ29tbWFuZCh0eXBlOiBDb21tYW1uZCwgLi4uYW55OiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0oLi4uYW55KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqItcclxuICAgICAqL1xyXG4gICAgYXN5bmMgbWFpbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGF3YWl0IEFzc2V0TW5nLmNoZWNrU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnBhbmVsX1ZlcnNpb24ubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfRG9vci5vcGVuRG9vcigpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9Eb29yLnNjYWxlQWN0aW9uKClcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLnNob3dBbGxWaWV3KClcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYShmYWxzZSlcclxuXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsID0gMFxyXG4gICAgICAgIC8vIEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIgPSAwXHJcbiAgICAgICAgLy8gR2FtZU1vZGxlLnBsYXlEYXRhLnRyYWluVHlwZSA9IFRyYWluVHlwZS5UeXBlMFxyXG4gICAgICAgIC8vIHRoaXMuZW5kQ2hvb3NUcmFpbigpXHJcbiAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVGlja2V0LnNob3coKVxyXG5cclxuICAgICAgICAvL3Rlc3RcclxuICAgICAgICAvLyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uID0gMTVcclxuICAgICAgICAvLyBHYW1lTW9kbGUucGxheURhdGEubGV2ZWwgPSAxXHJcbiAgICAgICAgLy8gdGhpcy5lbmRDaG9vc2VUaWNrZXQoKVxyXG5cclxuICAgICAgICAvLyB0aGlzLnNob3dRQSgpXHJcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0UHJvcHMoKVxyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZENob29zZVRpY2tldCgpIHtcclxuICAgICAgICBHYW1lTW9kbGUucWFMaWJyYXJ5ID0gbmV3IFFBTGlicmFyeShHYW1lTW9kbGUucGxheURhdGEubGV2ZWwsIDMpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5ID0gbmV3IENob29zZUxpYnJhcnkoR2FtZU1vZGxlLnBsYXlEYXRhLmxldmVsLCBHYW1lTW9kbGUucWFMaWJyYXJ5LnFhTGliX251bSlcclxuICAgICAgICBHYW1lTW9kbGUuYW5zd2VyTGlicmFyeSA9IG5ldyBBbnN3ZXJMaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5ID0gbmV3IEV4cGxhaW5MaWJyYXJ5KEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW0pXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UaWNrZXQuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5pbml0VHJhaW5TcHJpdGUoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5jaG9vc2VfVHJhaW4uc2hvdygpXHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kQ2hvb3NUcmFpbigpIHtcclxuICAgICAgICBhd2FpdCBuZXcgTXlEZWxheSgpLnNldERlbGF5KDIpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4uc2V0TWFuU3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGUpKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLnJlc2V0T2VnKClcclxuICAgICAgICB0aGlzLnBhbmVsX0JlYXIuaW5pdCgpXHJcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5nZXRUcmFpbkFjaXRvbigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmNob29zZV9UcmFpbi5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpXHJcbiAgICAgICAgdGhpcy5zaG93VGVhY2hpbmcoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgc2hvd1RlYWNoaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkuc2hvdygpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9UZWFjaGluZy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9UZWFjaGluZy5pbmZvMC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRUZWFjaGluZygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX1RlYWNoaW5nLmhpZGUoKTtcclxuICAgICAgICBHYW1lTW9kbGUuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN0YXJ0O1xyXG4gICAgICAgIC8vIHRoaXMucGFuZWxfVUkuc3RhdGlvbi5jaGVuZ2VTcHJpdCgpXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWFuQ2FtZXJhKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93VmlkZW8oKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wYW5lbF9NZXNzYWdlLnNob3coKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBwb3N0Q21kKClcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGFuZWxfTWFuLm5vd1N0YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZGF0YS5jbWQgPSBcIk9wZW5WaWV3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEudmlld1R5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lronlhajlvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNtZCA9IFwiT3BlblZpZXdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS52aWV3VHlwZSA9IDJcclxuICAgICAgICAgICAgICAgIGRhdGEubGV2ZWwgPSBHYW1lTW9kbGUucGxheURhdGEubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBHYW1lTW9kbGUud2ViUG9zdE1lc3NhZ2Uuc2VuZChkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7lu4nmlL/lvbHniYdcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZVZpZGVvKCk7XHJcbiAgICAgICAgLy8gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7fSwgXCIqXCIpXHJcbiAgICB9XHJcbiAgICBhc3luYyBjbG9zZVZpZGVvKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AodHJ1ZSlcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5HTygpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93UUEoKSB7XHJcbiAgICAgICAgbGV0IGdldFFBID0gXCJcIlxyXG4gICAgICAgIGxldCBnZXRDaG9vZXNlID0gXCJcIlxyXG4gICAgICAgIGdldFFBID0gR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9zdHJbR2FtZU1vZGxlLnFhSW5kZXhdXHJcbiAgICAgICAgZ2V0Q2hvb2VzZSA9IEdhbWVNb2RsZS5jaG9vc2VMaWJyYXJ5LmNob29zZUxpYltHYW1lTW9kbGUucWFJbmRleF1cclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24ucmVzZXQoKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRRQUluZm8oZ2V0UUEsIEdhbWVNb2RsZS5wbGF5RGF0YS5sZXZlbCwgR2FtZU1vZGxlLnFhTGlicmFyeS5xYUxpYl9udW1bR2FtZU1vZGxlLnFhSW5kZXhdKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zZXRDaG9vc2UoZ2V0Q2hvb2VzZSlcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2Uuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QWdhaW5RQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xdWVzdGlvbi5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBlbmRRQSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucXVlc3Rpb24uaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Fuc3dlcigpXHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93QW5zd2VyKCkge1xyXG4gICAgICAgIGxldCBnZXRBbnN3ZXIgPSBcIlwiXHJcbiAgICAgICAgZ2V0QW5zd2VyID0gR2FtZU1vZGxlLmFuc3dlckxpYnJhcnkuYW5zd2VyTGliX3N0cltHYW1lTW9kbGUucWFJbmRleF0uc3Vic3RyaW5nKDAsIDEpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnJlc2V0KClcclxuICAgICAgICBpZiAoR2FtZU1vZGxlLmNob29zZUFuc3dlciA9PSBnZXRBbnN3ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnRydWVBbnN3ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5xYUFuc3dlci5mYWxzZUFuc3dlcigpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnFhQW5zd2VyLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEFuc3dlcigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0dldFByb3BzKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzaG93RXhwbGFpbigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UucWFBbnN3ZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5leHBsYWluLnNldEluZm9TdHIoR2FtZU1vZGxlLmV4cGxhaW5MaWJyYXJ5LmV4cGxhaW5MaWJbR2FtZU1vZGxlLnFhSW5kZXhdKTtcclxuICAgICAgICBHYW1lTW9kbGUucWFJbmRleCsrLy8r5YWp5YCL5Zyw5pa55piv5Zug54K6546p5a625pyD5pyJ5YiG5pSv77yM5Zug5q2k5Zyo5YiG5pSv55qE5pyr56uv5YqgMUluZGV4XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmV4cGxhaW4uc2hvdygpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZW5kRXhwbGFpbigpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZXhwbGFpbi5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93R2V0UHJvcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93U3RhdGlvbkluZm8oc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ID09IDUgfHwgc2VsZWN0ID09IDExIHx8IHNlbGVjdCA9PSAxNSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMucGFuZWxfTWFuLm1hblN0YXRlICE9IEdhbWVTdGF0ZS5XYWl0KVxyXG4gICAgICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5MaW5lV2FpdCgpXHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldFRyYWluTmFtZShUcmFpbkluZm9MaWJyYXJ5LmdldE5hbWUoc2VsZWN0KSlcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2Uuc3RhdGlvbkluZm8uc2V0U3ByaXRlKEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiU3RhdGlvbkluZm9fXCIgKyBzZWxlY3QudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNldEluZm8oVHJhaW5JbmZvTGlicmFyeS5nZXRJbmZvKHNlbGVjdCkpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLnNob3coKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZFRhdGlvbkluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLnN0YXRpb25JbmZvLmhpZGUoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dHZXRQcm9wcygpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZ2V0UHJvcHMuc2V0RGF0YShcclxuICAgICAgICAgICAgUHJvcHNMaWJyYXJ5LmxpYi5nZXQodGhpcy5wYW5lbF9NYW4ubm93U3RhdGlvbiksXHJcbiAgICAgICAgICAgIEFzc2V0TW5nLmRhdGFfU3BydGllQXRsYXMuZ2V0KFwiR2V0UHJvcHNfXCIgKyB0aGlzLnBhbmVsX01hbi5ub3dTdGF0aW9uLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5zaG93KClcclxuICAgIH1cclxuICAgIGFzeW5jIGVuZEdldFByb3BzKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5nZXRQcm9wcy5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgICAgIEdhbWVNb2RsZS5xYUluZGV4KysvLyvlhanlgIvlnLDmlrnmmK/lm6DngrrnjqnlrrbmnIPmnInliIbmlK/vvIzlm6DmraTlnKjliIbmlK/nmoTmnKvnq6/liqAxSW5kZXhcclxuICAgICAgICB0aGlzLnBhbmVsX1VJLnByb3BzX0ZlYXR1cmUuc2V0U3RhcnRfU3RvcCh0cnVlKVxyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkdPKClcclxuICAgIH1cclxuICAgIGFzeW5jIHNob3dFbmRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5lbmRHYW1lLnBsYXlCZWFyU3ByaXRlKEdhbWVNb2RsZS5wbGF5RGF0YS50cmFpblR5cGVOdW1iZXIpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucGFuZWxfTWVzc2FnZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbF9NZXNzYWdlLmVuZEdhbWUuc2hvdygpO1xyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIGNsb3NlRW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01lc3NhZ2UuZW5kR2FtZS5oaWRlKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX01lc3NhZ2UuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgYWdhaW5HYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VFbmRHYW1lKClcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2VuY2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ29Mb3R0ZXJ5KCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VFbmRHYW1lKClcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLnNob3dBbGxWaWV3KClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3IuYmFja1NjYWxlQWN0aW9uKClcclxuICAgICAgICBhd2FpdCB0aGlzLnBhbmVsX0Rvb3IuY2xvc2VEb29yKClcclxuICAgIH1cclxuICAgIGRvb3JBZ2FpbkdhbWUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNlbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgbWVuR28oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhQ29udHJvbGwuY2FtZXJhU3RhdGUgIT0gQ2FtZXJhU3RhdGUuTWVuKVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb01hbkNhbWVyYSgpXHJcbiAgICAgICAgdGhpcy5wYW5lbF9NYW4ubWFuR08oKVxyXG4gICAgfVxyXG4gICAgbWFuV2FpdCgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsX01hbi5tYW5XYWl0KClcclxuICAgIH1cclxuICAgIG1hbkxpbmVXYWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuICAgIH1cclxuICAgIGFzeW5jIG1vdmVUYXJnZXQoc2VsZWN0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wYW5lbF9NYW4ubWFuU3RhdGUgIT0gR2FtZVN0YXRlLldhaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbF9VSS5wcm9wc19GZWF0dXJlLnNldFN0YXJ0X1N0b3AoZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMucGFuZWxfTWFuLm1hbkxpbmVXYWl0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGFuZWxfTWVzc2FnZS5zdGF0aW9uSW5mby5yZXNldCgpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFDb250cm9sbC5hY3RpdmVNYW5DYW1lcmEoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29udHJvbGwuYWN0aXZlTWluZUNhbWVyYSh0cnVlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYUNvbnRyb2xsLm1vdmVUb1N0YXRpb24oR2FtZU1vZGxlLm1hcEl0ZW0uZ2V0KHNlbGVjdCkubm9kZSlcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGFVSVN0YXJ0KHNldEJvb2xlYTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucGFuZWxfVUkucHJvcHNfRmVhdHVyZS5zZXRTdGFydF9TdG9wKHNldEJvb2xlYSlcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgcG9zdENtZCB7XHJcbiAgICBjbWQ6IHN0cmluZ1xyXG4gICAgdmlld1R5cGU6IG51bWJlclxyXG4gICAgbGV2ZWw6IG51bWJlclxyXG59XHJcblxyXG4iXX0=