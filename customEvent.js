// child html add this
// <script type="text/javascript" src="../../../reserved/error.js"></script>

// include grgGeneral.js file
document.write("<script language=\"javascript\" src=\"../html/000/grgjs/grgGeneral.js\"></script>");
document.write("<script language=\"javascript\" src=\"../html/000/grgjs/grgCashUnit.js\"></script>");
document.write("<script language=\"javascript\" src=\"../html/000/grgjs/grgCheckOut.js\"></script>");

	function CustomJS_OnNavigateComplete(UrlAddress, Reserve){}
	function CustomJS_OnDocumentComplete(UrlAddress, Reserve){}
	function CustomJS_OnBeforeNavigateForMainFrame(UrlAddress, Reserve){return false;}
	function CustomJS_OnNavigateErrorForMainFrame(UrlAddress, ErrorCode){return false;}
	function CustomJS_OnMouseButtonUpForMainFrame(PosX, PosY){}
	function CustomJS_OnATMInit(){}
	function CustomJS_OnEnterPowerupMode(){}
	function CustomJS_OnLeavePowerupMode(){}
	function CustomJS_OnEnterOffLineMode(){}
	function CustomJS_OnLeaveOffLineMode(){}
	function CustomJS_OnEnterInServiceMode(){
		GrgSensor.SetGuidLight("PASSBOOKPRINTER", "MEDIUM_FLASH");
	}
	function CustomJS_OnLeaveInServiceMode(){
		GrgSensor.SetGuidLight("PASSBOOKPRINTER", "OFF");
	}
	function CustomJS_OnEnterOutOfServiceMode(){}
	function CustomJS_OnLeaveOutOfServiceMode(){}
	function CustomJS_OnEnterMaintenanceMode(){}
	function CustomJS_OnLeaveMaintenanceMode(){}
	function CustomJS_OnRecvDataForGrgApp(NetworkData){}
	function CustomJS_OnSendDataForGrgApp(NetworkData){}
	function CustomJS_OnBeginProcessStateForGrgApp(State, Type, TypeEx){}
	function CustomJS_OnEndProcessStateForGrgApp(State, Type, TypeEx){}
	function CustomJS_OnPreEnterZeroStateForGrgApp(){}
	function CustomJS_OnCreateTransRequestMsgForGrgApp(){}
	function CustomJS_OnPreSetScreenNumberForGrgApp(ScreenNumber){}
	function CustomJS_OnPreProcessFunctionForGrgApp(FunctionID){}
	function CustomJS_OnEndProcessFunctionForGrgApp(FunctionID){}
	function CustomJS_OnBeginProcessTransReplyForGrgApp(){}
	function CustomJS_OnEndProcessTransReplyForGrgApp(){}
	function CustomJS_OnExeProcessCompleteForGrgApp(RetValue, ExePath){}
	function CustomJS_OnEnterHtmlModeCompleteForGrgApp(){}
	function CustomJS_OnDoATMStateCompleteForGrgApp(RetValue,CurrentState,NextState){}
	function CustomJS_OnTimerForGrgApp(IDEvent){}
	function CustomJS_OnBeginProcessFlashCmdForGrgApp(ParamInfo, CmdID, Param1, Param2, Param3, Param4, Param5){
		 if ((CmdID == "0131") && (Param1 == "2")) {
     	GrgApp.SetWaitHtmlFlag(true);
		PrintCheckOut(1);	 
		GrgDataPool.SetValueByName("Exit_Process_Function_Flag", "1");
		GrgApp.SetWaitHtmlFlag(false);
		GrgApp.SendMoneyBoxInfoToFlash();   
    }
	}
	function CustomJS_OnEndProcessFlashCmdForGrgApp(ParamInfo, CmdID, Param1, Param2, Param3, Param4, Param5){}
	function CustomJS_OnBeginConfigureNoteTypesForGrgApp(NoteList){}
	function CustomJS_OnEndConfigureNoteTypesForGrgApp(RetValue){}
	function CustomJS_OnBeginCreateReceiptImageForGrgApp(){}
	function CustomJS_OnEndCreateReceiptImageForGrgApp(){}
	function CustomJS_OnBeginPrintFormForGrgApp(){}
	function CustomJS_OnEndPrintFormForGrgApp(){}
	function CustomJS_OnGenerateOCRInfoForGrgApp(OCRInfo){}
	function CustomJS_OnPreCreateNewBuffer(BufferName, BufferSize){}
	function CustomJS_OnBeginProcessReplyBunchChequesForGrgApp(DepositFlag){}
	function CustomJS_OnEndProcessReplyBunchChequesForGrgApp(DepositFlag){}
	function CustomJS_OnBeginCountCheckForGrgApp(){}
	function CustomJS_OnEndCountCheckForGrgApp(RetValue){}
	function CustomJS_OnTransReplyForGrgApp(ReplyInfo){}
	function CustomJS_OnTransDetailInfoForGrgApp(TransDetail){}
	function CustomJS_OnSensorStatusChangeForGrgApp(){}
	function CustomJS_OnLeaveZeroStateForGrgApp(LeaveStatus){}
	function CustomJS_OnPreCutReceiptForGrgApp(){}
	function CustomJS_OnGetICCCardInfoCompleteForGrgApp(RetValue){}
	function CustomJS_OnBeginLogEJForGrgApp(LogEJToJournal, LogEJToFile, TimeForLogEJToJournal, TimeForLogEJToFile, LogEJData){}
	function CustomJS_OnBeginShowTextAtScreenForGrgApp(TextInfo){}
	function CustomJS_OnEMVKernelGetPinForGrgApp(){}
	function CustomJS_OnBeginGetAmountTemplateForGrgApp(AmountTemplate){}
	function CustomJS_OnBeginCashInForGrgApp(Reserve){}
	function CustomJS_OnBeginEmvOnlineAuthorisationForGrgApp(){}
	function CustomJS_OnEndEmvOnlineAuthorisationForGrgApp(RetValue, ACValue){}
	function CustomJS_OnCashDepositProcessInfoForGrgApp(ProcessInfo, Reserve, ReserveInfo){}
	function CustomJS_OnCardReaderChipPowerForGrgApp(ChipPower, RetValue){}
	function CustomJS_OnProcessTransReplyMsgCompleteForGrgApp(RetValue, CurrentState, NextState, Reserve){}
	function CustomJS_OnBeginRetractCashForGrgApp(RetractInfo){}
	function CustomJS_OnEndRetractCashForGrgApp(RetractInfo){}
	function CustomJS_OnBeginCaptureCardForGrgApp(RetractInfo){}
	function CustomJS_OnEndCaptureCardForGrgApp(RetractInfo){}
	function CustomJS_OnBeginProcessConfirmForDepositForGrgApp(DeviceType, ActiveKey){}
	function CustomJS_OnConnectForGrgApp(){}
	function CustomJS_OnCloseForGrgApp(){}
    function CustomJS_OnBeginEppGetDataForGrgApp(ActiveKeys){}
	function CustomJS_OnPinKeyForGrgEpp(KeyData){}
	function CustomJS_OnGetPinCompleteForGrgEpp(RetCode){}
	function CustomJS_OnRecvDataForGrgNetwork(NetworkData){}
	function CustomJS_OnEMVCompletedForTransReplyForGrgApp(){}
	function CustomJS_OnConnectForGrgNetwork(){}
	function CustomJS_OnCloseForGrgNetwork(){}
	function CustomJS_OnSendDataCompleteForGrgNetwork(RetValue,DataType){}
	function CustomJS_OnItemsTakenForGrgCashDispenser(){}
	function CustomJS_OnItemsPresentedForGrgCashDispenser(){}
	function CustomJS_OnDispenseCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnRejectCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnRetractCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnResetCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnCountCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnPresentCompleteForGrgCashDispenser(RetValue){}
	
	function CustomJS_OnStartExchangeCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnSetCashUnitInfoCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnEndExchangeCompleteForGrgCashDispenser(RetValue){}
	function CustomJS_OnExeeCashUnitErrorForGrgCashDispenser(CUInfo){}
	function CustomJS_OnSrveCashUnitInfoChangedForGrgCashDispenser(CUInfo){}
	function CustomJS_OnUsreCashUnitThresholdForGrgCashDispenser(CUInfo){}
	function CustomJS_OnExeeNoteErrorForGrgCashDispenser(Reason){}
	function CustomJS_OnSrveExchangingNotesPresentForGrgCashDispenser(SortInfo){}
	function CustomJS_OnSrveExchangingWaitInputForGrgCashDispenser(){}
	function CustomJS_OnSrveExchangingPosHadHotesForGrgCashDispenser(Reason){}
	function CustomJS_OnSrveExchangingActionForGrgCashDispenser(Action){}
	
	function CustomJS_OnItemsTakenForGrgCoinDispenser(){}
	function CustomJS_OnItemsPresentedForGrgCoinDispenser(){}
	function CustomJS_OnDispenseCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnRejectCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnRetractCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnResetCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnCountCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnPresentCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnStartExchangeCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnSetCashUnitInfoCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnEndExchangeCompleteForGrgCoinDispenser(RetValue){}
	function CustomJS_OnExeeCashUnitErrorForGrgCoinDispenser(CUInfo){}
	function CustomJS_OnSrveCashUnitInfoChangedForGrgCoinDispenser(CUInfo){}
	function CustomJS_OnUsreCashUnitThresholdForGrgCoinDispenser(CUInfo){}
	function CustomJS_OnExeeNoteErrorForGrgCoinDispenser(Reason){}
	function CustomJS_OnSrveExchangingNotesPresentForGrgCoinDispenser(SortInfo){}
	function CustomJS_OnSrveExchangingWaitInputForGrgCoinDispenser(){}
	function CustomJS_OnSrveExchangingPosHadHotesForGrgCoinDispenser(Reason){}
	function CustomJS_OnSrveExchangingActionForGrgCoinDispenser(Action){}
	
	function CustomJS_OnItemsTakenForGrgCashDeposit(){}
	function CustomJS_OnItemsPresentedForGrgCashDeposit(){}
	function CustomJS_OnItemsInsertedForGrgCashDeposit(){}
	function CustomJS_OnExeeInputRefuseForGrgCashDeposit(Reason){}
	function CustomJS_OnCashInRollbackCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnCashInEndCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnRetractCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnResetCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnCashInCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnOpenShutterCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnCloseShutterCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnStartExchangeCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnSetCashUnitInfoCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnEndExchangeCompleteForGrgCashDeposit(RetValue){}
	function CustomJS_OnExeeCashUnitErrorForGrgCashDeposit(CUInfo){}
	function CustomJS_OnSrveCashUnitInfoChangedForGrgCashDeposit(CUInfo){}
	function CustomJS_OnUsreCashUnitThresholdForGrgCashDeposit(CUInfo){}
	function CustomJS_OnExeeNoteErrorForGrgCashDeposit(Reason){}
	
	function CustomJS_OnSrveExchangingNotesPresentForGrgCashDeposit(SortInfo){}
	function CustomJS_OnSrveExchangingWaitInputForGrgCashDeposit(){}
	function CustomJS_OnSrveExchangingPosHadHotesForGrgCashDeposit(Reason){}
	function CustomJS_OnSrveExchangingActionForGrgCashDeposit(Action){}
	
	function CustomJS_OnReadCompleteForGrgBarcodeReader(RetValue, CodeFormat, CodeData){}
	function CustomJS_OnProcessCheckCompleteForGrgCheckReader(RetValue, Options){}
	function CustomJS_OnSrveChkMediaInsertedForGrgCheckReader(){}
	function CustomJS_OnSrvePtrMediaTakenForGrgCheckReader(){}
	function CustomJS_OnExeeChkMediaInsertedForGrgCheckReader(){}
	function CustomJS_OnReadCompleteForGrgPassport(RetValue, ResultData){}
	
	function CustomJS_OnOpenDeviceCompleteForGrgPassport(RetValue){}
	function CustomJS_OnCloseDeviceCompleteForGrgPassport(RetValue){}
	function CustomJS_OnResetCompleteForGrgPassport(RetValue){}
	function CustomJS_OnReadImageCompleteForGrgReceipt(RetValue, ReadImageOut){}
	function CustomJS_OnMediaTakenForGrgReceipt(){}
	function CustomJS_OnMediaInsertedForGrgReceipt(){}
	function CustomJS_OnSrveSiuPortStatusForGrgSensor(PortType, PortIndex, PortStatus, PortReserve){}
	
	function CustomJS_OnSysHardwareErrorForGrgEpp(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgEpp(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgReceipt(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgReceipt(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgJournal(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgJournal(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgCashDispenser(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCashDispenser(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgCoinDispenser(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCoinDispenser(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgCashDeposit(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCashDeposit(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgBarcodeReader(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgBarcodeReader(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgCheckReader(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCheckReader(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgPassport(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgPassport(ErrorInfo){}
	
	function CustomJS_OnItemsTakenForGrgBunchCheque(){}
	function CustomJS_OnItemsPresentedForGrgBunchCheque(){}
	function CustomJS_OnItemsInsertedForGrgBunchCheque(){}
	function CustomJS_OnCashInRollbackCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnCashInEndCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnRetractCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnResetCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnCashInCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnOpenShutterCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnCloseShutterCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnStartExchangeCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnSetCashUnitInfoCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnEndExchangeCompleteForGrgBunchCheque(RetValue){}
	function CustomJS_OnExeeCashUnitErrorForGrgBunchCheque(CUInfo){}
	function CustomJS_OnSrveCashUnitInfoChangedForGrgBunchCheque(CUInfo){}
	function CustomJS_OnUsreCashUnitThresholdForGrgBunchCheque(CUInfo){}
	function CustomJS_OnExeeNoteErrorForGrgBunchCheque(Reason){}
	function CustomJS_OnSrveExchangingNotesPresentForGrgBunchCheque(SortInfo){}
	function CustomJS_OnSrveExchangingWaitInputForGrgBunchCheque(){}
	function CustomJS_OnSrveExchangingPosHadHotesForGrgBunchCheque(Reason){}
	function CustomJS_OnSrveExchangingActionForGrgBunchCheque(Action){}
	function CustomJS_OnSysHardwareErrorForGrgBunchCheque(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgBunchCheque(ErrorInfo){}
	function CustomJS_OnEjectCardCompleteForGrgCardReader(RetValue){}
	function CustomJS_OnRetainCardCompleteForGrgCardReader(RetValue){}
	function CustomJS_OnReadRawDataCompleteForGrgCardReader(RetValue, CardData){}
	function CustomJS_OnSysHardwareErrorForGrgCardReader(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCardReader(ErrorInfo){}
	function CustomJS_OnDispenseCompleteForGrgEnvelope(RetValue){}
	function CustomJS_OnRetractCompleteForGrgEnvelope(RetValue){}
	function CustomJS_OnEntryCompleteForGrgEnvelope(RetValue){}
	function CustomJS_OnResetCompleteForGrgEnvelope(RetValue){}
	function CustomJS_OnSysHardwareErrorForGrgEnvelope(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgEnvelope(ErrorInfo){}
	function CustomJS_OnEjectCardCompleteForGrgRFReader(RetValue){}
	function CustomJS_OnRetainCardCompleteForGrgRFReader(RetValue){}
	function CustomJS_OnReadRawDataCompleteForGrgRFReader(RetValue, CardData){}
	function CustomJS_OnSysHardwareErrorForGrgRFReader(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgRFReader(ErrorInfo){}
	function CustomJS_OnSysHardwareErrorForGrgCardDispenser(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCardDispenser(ErrorInfo){}
	function CustomJS_OnResetCompleteForGrgCardDispenser(RetValue){}
	function CustomJS_OnDispenseCardCompleteForGrgCardDispenser(RetValue){}
	function CustomJS_OnEjectCardCompleteForGrgCardDispenser(RetValue){}
	function CustomJS_OnRetainCardCompleteForGrgCardDispenser(RetValue){}
	function CustomJS_OnSetCardUnitInfoCompleteForGrgCardDispenser(RetValue){}
	function CustomJS_OnSrveCrdMediaRemovedForGrgCardDispenser(Desc){}
	function CustomJS_OnMediaInCompleteForGrgItemModule(RetValue){}
	function CustomJS_OnSysHardwareErrorForGrgItemModule(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgItemModule(ErrorInfo){}
	function CustomJS_OnExeeIpmMediaInsertedForGrgItemModule(){}
	function CustomJS_OnSrveIpmMediaTakenForGrgItemModule(Position){}
	function CustomJS_OnSrveIpmMediaBinInfoChangedForGrgItemModule(MediaBinInfo){}
	function CustomJS_OnUsreIpmMediaBinThresholdForGrgItemModule(MediaBinInfo){}
	function CustomJS_OnSysHardwareErrorForGrgCamera(ErrorInfo){}
	function CustomJS_OnSysDeviceStatusForGrgCamera(ErrorInfo){}
	function CustomJS_OnUsreMediaThresholdForGrgCamera(Media){}
	function CustomJS_OnTakePictureExCompleteForGrgCamera(RetValue){}
	function CustomJS_OnMakeCallCompleteForGrgCamera(RetValue, RetInfo){}
	function CustomJS_OnDisconnectCallCompleteForGrgCamera(RetValue, RetInfo){}
	function CustomJS_OnVideoCallSysStatusForGrgCamera(OnlineTellerCount, OnlineTellerIdleCount,StatusInfo){}
	function CustomJS_OnVideoCallSysDisconnectForGrgCamera(RetCode, StrRetInfo){}