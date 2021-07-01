var _SkillLevel = new Array()
var UserSkills = new Array();
var _TotalPoints = 222;
var isIE	= document.all;
var SkillBuff = [0,0,0,0,0,0,0,0,0,0,0];
var SkillBuffOld = [0,0,0,0,0,0,0,0,0,0,0];
var RewardPoints = 0;
var RewardPointsOld = 0;
var Rewards = 0;
var RewardRemainPoints = 0;
var ModeSet = 0;
Mastery = new Array()
AttributesBase = new Array()
AttributesReward = new Array()
function SetUserSkills() {
this.SkillLevel = new Array(22)
}

function GetModeSet(){
    var temp;
    temp = document.getElementById( "modeset").value;
    ModeSet = parseInt(temp);				//�õ��б�ı���ֵ
}

function GetSkillReward(){
    RewardPointsOld = RewardPoints;
    var temp;
    temp = document.getElementById( "rewards").value;
    RewardPoints = parseInt(temp);				//�õ��б�ı���ֵ
    if (RewardPoints > RewardPointsOld){
        AddPointSkillReward();
    }
    else if (RewardPoints < RewardPointsOld){
        RemovePointSkillReward();
    }else{
        return;
    }
    UpdatePlayerBaseAttributes(0);
}

function AddPointSkillReward(){
    Rewards = RewardPoints - RewardPointsOld;
    RewardRemainPoints = RewardRemainPoints  + Rewards;
    UpdateSkillStats(0); 
    DrawSpellList();
}

function RemovePointSkillReward(){
    Rewards = RewardPoints - RewardPointsOld;
    RewardRemainPoints = RewardRemainPoints  + Rewards;
    UpdateSkillStats(0); 
    DrawSpellList();
}

function GetSkillBuff(masteryid){
    for(var i = 0; i < 11; i++)
        SkillBuffOld[i] = SkillBuff[i];
    var temp;
    switch(masteryid){ 
        case 1:  
            temp = document.getElementById( "num1").value;
            break; 
        case 2:
            temp = document.getElementById( "num2").value;
            break; 
        case 3:
            temp = document.getElementById( "num3").value;
            break; 
        case 4: 
            temp = document.getElementById( "num4").value;
            break; 
        case 5:
            temp = document.getElementById( "num5").value;
            break; 
        case 6:
            temp = document.getElementById( "num6").value;
            break; 
        case 7: 
            temp = document.getElementById( "num7").value;
            break; 
        case 8:
            temp = document.getElementById( "num8").value;
            break; 
        case 9:
            temp = document.getElementById( "num9").value;
            break; 
        case 10:
            temp = document.getElementById( "num10").value;
            break; 
        default:
            temp = document.getElementById( "num10").value;
    }
    SkillBuff[masteryid] = parseInt(temp);//�õ��б�ı���ֵ
    if (SkillBuff[masteryid] > SkillBuffOld[masteryid]){
        AddPointSkillBuff(masteryid);
    }
    else if (SkillBuff[masteryid] < SkillBuffOld[masteryid]){
        RemovePointSkillBuff(masteryid);
    }else{
        return;
    }
}

function AddPointSkillBuff(masteryid){
    var Points = SkillBuff[masteryid] - SkillBuffOld[masteryid];
    for (var y = 0 ; y < UserSkills[masteryid].SkillLevel.length; y++) {
        if (UserSkills[masteryid].SkillLevel[y]) {
            var skillid = y;
            if (UserSkills[masteryid].SkillLevel[skillid] + Points < Mastery[masteryid].Skills[skillid].spells.length){
                UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points;
            }
            else{
                if (SkillBuff[masteryid] >= Mastery[masteryid].Skills[skillid].spells.length - 1){
                    if (SkillBuffOld[masteryid] < Mastery[masteryid].Skills[skillid].spells.length - 1){
                        if (UserSkills[masteryid].SkillLevel[skillid] <= Mastery[masteryid].Skills[skillid].spells.length - 1){
                            _TotalPoints = _TotalPoints + UserSkills[masteryid].SkillLevel[skillid] - SkillBuffOld[masteryid] - 1;
                            UserSkills[masteryid].SkillLevel[skillid] = Mastery[masteryid].Skills[skillid].spells.length - 1; 
                        }
                    }
                }
                else{
                    _TotalPoints = _TotalPoints + UserSkills[masteryid].SkillLevel[skillid] + Points - (Mastery[masteryid].Skills[skillid].spells.length - 1);
                    UserSkills[masteryid].SkillLevel[skillid] = Mastery[masteryid].Skills[skillid].spells.length - 1; 
                }               
            }

            document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + ((Mastery[masteryid].Skills[skillid].spells.length)  - 5)
            UpdateSkillStats(masteryid)  
            DrawSpellList() 
        }
    }
      
}

function RemovePointSkillBuff(masteryid){
    var Points = SkillBuff[masteryid] - SkillBuffOld[masteryid];
    for (var y = 0 ; y < UserSkills[masteryid].SkillLevel.length; y++) {
        if (UserSkills[masteryid].SkillLevel[y]) {
            var skillid = y;
            if (SkillBuff[masteryid] < Mastery[masteryid].Skills[skillid].spells.length - 2){
                if (SkillBuffOld[masteryid] >= Mastery[masteryid].Skills[skillid].spells.length - 1){
                    UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points + SkillBuffOld[masteryid] - (Mastery[masteryid].Skills[skillid].spells.length - 2); 
                }
                else{
                    UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points; 
                }               
            }

            document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + ((Mastery[masteryid].Skills[skillid].spells.length)  - 5)
            UpdateSkillStats(masteryid)  
            DrawSpellList() 
        }
    }

}

function SetPage(masteryid,bolReset) {
    if (bolReset) {
        if (!confirm('��ȷʵҪ����' + Mastery[masteryid].masteryname + 'ר����')) { return false;}
        _TotalPoints = parseInt(_TotalPoints) + parseInt(_SkillLevel[masteryid])
        var TotalPoints = 0
        for (var y = 0 ; y < UserSkills[masteryid].SkillLevel.length; y++) {
            if (UserSkills[masteryid].SkillLevel[y]) {
                if (SkillBuff[masteryid] < Mastery[masteryid].Skills[y].spells.length - 1)
                    TotalPoints= TotalPoints + UserSkills[masteryid].SkillLevel[y] - SkillBuff[masteryid];
                else
                    TotalPoints= TotalPoints + 1;
            }
        }
        _TotalPoints = parseInt(_TotalPoints) + TotalPoints
    }
    UserSkills[masteryid] = new SetUserSkills()
    _SkillLevel[masteryid] = 0;
    for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
        if (document.getElementById("spell_" + masteryid + '_' + (x+1))) {
            document.getElementById("spell_" + masteryid + '_' + (x+1)).innerHTML = "0 / " + ((Mastery[masteryid].Skills[x].spells.length)  - 5)
        }
    }
    UpdateSkillStats(masteryid)
//    UpdateLinkBack()
    UpdatePlayerBaseAttributes()
    UpdateSkillBar(masteryid)
    if (bolReset) {  DrawSpellList() }
    if (!bolReset) {
        if (_PreSet1.length > 0 && UserSkills[_Mastery1] && masteryid == _Mastery1) {
            SetFormFromReturn(_PreSet1,_Mastery1)
        }
        if (_PreSet2.length > 0 && UserSkills[_Mastery2] && masteryid == _Mastery2  ) {
            SetFormFromReturn(_PreSet2,_Mastery2)
        }
    }
}


function AddSkillLevel(masteryid,button,skilllevel) {
    switch(ModeSet){ 
        case 0:  
            break; 
        case 1:
            button = 2;
            break; 
        case 2:
            break; 
        case 3: 
            button = 2;
            break; 
        default:
    }
    if (button != 2 && !skilllevel)  {
        if ((parseInt(_SkillLevel[masteryid]) + 1) <= 40) {
            if (RewardRemainPoints >= 1 ){
                _SkillLevel[masteryid]++
                RewardRemainPoints = RewardRemainPoints - 1
            }
            else{
                _SkillLevel[masteryid]++
                _TotalPoints = _TotalPoints - 1
            }
        }
    }
    else if (skilllevel) {
        for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
            if (Mastery[masteryid].Skills[x].min_points >= skilllevel && UserSkills[masteryid].SkillLevel[x] > 0 ) {
                return false;
            }
        }
        if (skilllevel >= _SkillLevel[masteryid]){
            if (RewardRemainPoints >= skilllevel - _SkillLevel[masteryid]){
                RewardRemainPoints = RewardRemainPoints + (_SkillLevel[masteryid] - skilllevel);
                _SkillLevel[masteryid] = skilllevel;
            }
            else{
                _TotalPoints = _TotalPoints + _SkillLevel[masteryid] - skilllevel + RewardRemainPoints;
                RewardRemainPoints = 0;
                _SkillLevel[masteryid] = skilllevel;
            }
        }
        else{
                _TotalPoints = _TotalPoints + _SkillLevel[masteryid] - skilllevel
                _SkillLevel[masteryid] = skilllevel;
        }
    }
    else {
        for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
            if (Mastery[masteryid].Skills[x].min_points >= _SkillLevel[masteryid] && UserSkills[masteryid].SkillLevel[x] > 0 ) {
                return false;
            }
        }
        if (_SkillLevel[masteryid] - 1 >= 0) {
            _SkillLevel[masteryid]--
            _TotalPoints = _TotalPoints + 1
        }
    }
    UpdateSkillStats(masteryid)
    UpdateSkillBar(masteryid)
    if (!skilllevel) DrawSkill(masteryid)
}

function UpdateSkillStats(masteryid) {
    var flag = 1;
    for (var x = 0 ; x < Mastery.length;x++) {
        if (document.getElementById("pointsremaining_" + x)) {
            if (RewardRemainPoints < 0){
                _TotalPoints = _TotalPoints + RewardRemainPoints;
                RewardRemainPoints = 0;
            }
            var PointsTemp = _TotalPoints + RewardRemainPoints;
            var UpdateText = "ʣ�༼�ܵ�����" + PointsTemp;
            var PointsLvTemp = PointsTemp;
            if (PointsLvTemp > 222){
                PointsLvTemp = 222;
            }
            if (PointsLvTemp < -30){
                if (flag){
                    alert("�Ѵﵽ��Ϸ�趨�Ľ�ɫ��ߵȼ�����ϴȥ�����ѷ��似�ܵ�ֱ�����ü��ܵ���>=-30");
                    flag = 0;
                }
                UpdateText = UpdateText + "�����ƽ�ɫ�ȼ���" + parseInt(85);
            }
            else
                UpdateText = UpdateText + "�����ƽ�ɫ�ȼ���" + parseInt(Math.ceil((222 - PointsLvTemp)/3) + 1);

            document.getElementById("pointsremaining_" + x).innerHTML =  UpdateText;
        }
        var TotalPoints = 0
        if (UserSkills[x]) {
            for (var y = 0 ; y < UserSkills[x].SkillLevel.length; y++) {
                if (UserSkills[x].SkillLevel[y]) {
                    if (SkillBuff[masteryid] < Mastery[x].Skills[y].spells.length - 1)
                        TotalPoints= TotalPoints + UserSkills[x].SkillLevel[y] - SkillBuff[x];
                    else
                        TotalPoints= TotalPoints + 1;
                }
            }
        }
        if (document.getElementById("masterypoints_" + x)) {
            var UpdateText = "�ѷ��侫ͨ���ܵ�����" + _SkillLevel[x]
            UpdateText = UpdateText +  "���ѷ���ר�����ܵ�����" + TotalPoints;
            UpdateText = UpdateText + "������ϵ�ܼƷ��������" + parseInt(parseInt(_SkillLevel[x]) + parseInt(TotalPoints))
            document.getElementById("masterypoints_" + x).innerHTML =  UpdateText;
        }
    }

//    UpdateLinkBack()
}

function UpdateSkillBar(masteryid) {
    if ( _SkillLevel[masteryid] >= 1 ) { document.getElementById("b1pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b1pt_" + masteryid).style.background = "#48422B" }
    if ( _SkillLevel[masteryid] >= 4 ) { document.getElementById("b4pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b4pt_" + masteryid).style.background = "#48422B" }
    if ( _SkillLevel[masteryid] >= 10 ) { document.getElementById("b10pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b10pt_" + masteryid).style.background = "#48422B" }
    if ( _SkillLevel[masteryid] >= 16 ) { document.getElementById("b16pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b16pt_" + masteryid).style.background = "#48422B" }
    if ( _SkillLevel[masteryid] >= 24 ) { document.getElementById("b24pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b24pt_" + masteryid).style.background = "#48422B" }
    if ( _SkillLevel[masteryid] >= 32 ) { document.getElementById("b32pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b32pt_" + masteryid).style.background = "#48422B" }
    if ( _SkillLevel[masteryid] >= 40 ) { document.getElementById("b40pt_" + masteryid).style.background = "#0000FF" } else { document.getElementById("b40pt_" + masteryid).style.background = "#48422B" }
    UpdatePlayerBaseAttributes(masteryid)
}

function UpdatePlayerBaseAttributes(masteryid) {
    if (AttributesBase[0]) {
        document.getElementById("health").innerHTML = AttributesBase[0].health
        document.getElementById("energy").innerHTML = AttributesBase[0].energy
        document.getElementById("str").innerHTML = AttributesBase[0].str
        document.getElementById("dex").innerHTML = AttributesBase[0].dex
        document.getElementById("int").innerHTML = AttributesBase[0].inte
        AppendMasteryAttributesReward()
        AppendMasteryAttributes(_Mastery1)
        AppendMasteryAttributes(_Mastery2)
    }
}

function AppendMasteryAttributes(masteryid) {
    if (_SkillLevel[masteryid] > 0) {
        document.getElementById("health").innerHTML = parseInt(document.getElementById("health").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].health;
        document.getElementById("energy").innerHTML = parseInt(document.getElementById("energy").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].energy;
        document.getElementById("str").innerHTML = parseInt(document.getElementById("str").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].str;
        document.getElementById("dex").innerHTML = parseInt(document.getElementById("dex").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].dex;
        document.getElementById("int").innerHTML = parseInt(document.getElementById("int").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].inte;
    }
}

function AppendMasteryAttributesReward() {
    if (RewardPoints == 0) AttributesReward = new Attribute(0,0,0,0,0);
    else if (RewardPoints == 1) AttributesReward = new Attribute(0,0,0,0,0);
    else if (RewardPoints == 3) AttributesReward = new Attribute(75,0,0,0,0);
    else if (RewardPoints == 5) AttributesReward = new Attribute(75,0,0,0,0);
    else if (RewardPoints == 7) AttributesReward = new Attribute(155,0,10,4,4);
    else if (RewardPoints == 8) AttributesReward = new Attribute(155,0,10,4,4);
    else if (RewardPoints == 10) AttributesReward = new Attribute(155,0,10,4,4);
    else if (RewardPoints == 11) AttributesReward = new Attribute(155,0,10,4,4);
    else if (RewardPoints == 13) AttributesReward = new Attribute(305,0,10,4,4);
    else if (RewardPoints == 15) AttributesReward = new Attribute(305,0,10,4,4);
    else if (RewardPoints == 17) AttributesReward = new Attribute(455,0,24,10,10);
    else if (RewardPoints == 18) AttributesReward = new Attribute(455,0,24,10,10);
    else if (RewardPoints == 20) AttributesReward = new Attribute(455,0,24,10,10);
    else if (RewardPoints == 21) AttributesReward = new Attribute(455,0,24,10,10);
    else if (RewardPoints == 23) AttributesReward = new Attribute(655,0,24,10,10);
    else if (RewardPoints == 25) AttributesReward = new Attribute(655,0,24,10,10);
    else if (RewardPoints == 27) AttributesReward = new Attribute(855,0,42,18,18);
    else if (RewardPoints == 28) AttributesReward = new Attribute(855,0,42,18,18);
    else if (RewardPoints == 30) AttributesReward = new Attribute(855,0,42,18,18);
    else AttributesReward = new Attribute(0,0,0,0,0);

    document.getElementById("health").innerHTML = parseInt(document.getElementById("health").innerHTML) + AttributesReward.health;
    document.getElementById("energy").innerHTML = parseInt(document.getElementById("energy").innerHTML) + AttributesReward.energy;
    document.getElementById("str").innerHTML = parseInt(document.getElementById("str").innerHTML) + AttributesReward.str;
    document.getElementById("dex").innerHTML = parseInt(document.getElementById("dex").innerHTML) + AttributesReward.dex;
    document.getElementById("int").innerHTML = parseInt(document.getElementById("int").innerHTML) + AttributesReward.inte;
}

function GetSpellText(masteryid,skillid) {
    var rankid = 0
    if (UserSkills[masteryid]) {
        if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { UserSkills[masteryid].SkillLevel[skillid] = 0 }
            rankid = UserSkills[masteryid].SkillLevel[skillid]
        }
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].Skills[skillid].name + "</div></B>"
        strHTML = strHTML + "<div id='spelldesc'>" + Mastery[masteryid].Skills[skillid].desc + "</div><BR>"
        if (rankid > 0) {
            strHTML = strHTML + "<div id='currentranklevel'>��ǰ�ȼ���" + (rankid) + "</div>"
            strHTML = strHTML + "<div id='currentspell'>" + Mastery[masteryid].Skills[skillid].spells[rankid].spellinfo.replace(/,/g,"<br>") + "</div><BR>"
        }
        if (Mastery[masteryid].Skills[skillid].spells[rankid + 1]) {
            strHTML = strHTML + "<div id='nextranklevel'>��һ�ȼ���" + (rankid + 1) + "</div>"
            strHTML = strHTML + "<div id='nextspell'>" + Mastery[masteryid].Skills[skillid].spells[rankid + 1].spellinfo.replace(/,/g,"<br>") + "</div>"
        }
        if (Mastery[masteryid].Skills[skillid].prereq >= 0 ) {
            if ( UserSkills[masteryid].SkillLevel[Mastery[masteryid].Skills[skillid].prereq] > 0 ) {
                strHTML = strHTML + "<BR><div id='prereq'>��Ҫ���ܣ�" + Mastery[masteryid].Skills[Mastery[masteryid].Skills[skillid].prereq].name + "</div>"
            }
        else {
            strHTML = strHTML + "<BR><div id='prereq'><font color=red>��Ҫ���ܣ�" + Mastery[masteryid].Skills[Mastery[masteryid].Skills[skillid].prereq].name + "</div>"
        }
    }
    return strHTML
}

function DrawSkill(masteryid) {
    img = document.getElementById("button" + masteryid)
    if (!document.getElementById("tip")) {
        var divtip = document.createElement("div")
        divtip.setAttribute('id',"tip")
        document.body.appendChild(divtip)
    }
    document.getElementById("tip").style.position = "absolute";
    divtip = document.getElementById("tip")
    divtip.innerHTML = GetSkillLevelText(masteryid)
    img.style.position = "relative"
    divtip.style.top =  img.offsetTop - divtip.offsetHeight - 20;
    divtip.style.left = img.height;
}

function GetSkillLevelText(masteryid) {
    if (masteryid == 1){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "��Զ��֮���������ͷ�Ժ���꣬������Կ�����ʯ�ͻ��棬�ͷ����Դ�ص�����������" + "</div>"
    }
    else if (masteryid == 2){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "ͨ�����ص�֪ʶ�;���ѵ����ѧϰ��������ĺڰ�������" + "</div>"
    }
    else if (masteryid == 3){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "�ڽ���ս������ɾ޴��˺���ս��ר������������ܼ��ľ���ѵ��ʹ�˶Խ�����ͷ����������ӵ�п��µ������̶ȡ���Ҫѵ�������������ա�ר���ڵ��ֻ�˫��ս�����Լ�������ǿ�˺������ս�����ɡ�" + "</div>"
    }
    else if (masteryid == 4){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "�������ڵĺ�г�����ԣ�ѧϰҰ����������ԣ����������ڴ���Ȼ���������" + "</div>"
    }
    else if (masteryid == 5){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "ѧϰ���ͺ�ǿ���ļ��ܣ������Լ������ѵİ�ȫ��" + "</div>"
    }
    else if (masteryid == 6){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "ͨ�������ѵ��������֪ʶ��ѧϰ��Ϊһ��������" + "</div>"
    }
    else if (masteryid == 7){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "���ڲ�ʳ�ľ���ͱ�Ҫ��������ѧϰ���Եļ�����" + "</div>"
    }
    else if (masteryid == 8){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "ͨ����ʶ���ƺͼ��о����ѵ���ͷ���˼ά����֮���Ǳ����ѧϰ����ǿ������Ԫ�ص�������" + "</div>"
    }
    else if (masteryid == 9){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + "�λ�֮��" + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "��չ�о������ξ����ȡ����������ʵ�о�չ�����־��" + "</div>"
    }
    else if (masteryid == 10){
        var strHTML = ""
        strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"  + "ѧϰ����֮�գ�ͨ��ѵ���Կ���ս���е�ŭ��ħ����" + "</div>"
    }
    if (_SkillLevel[masteryid] > 0) {
        var strHTML = strHTML +  "<div id='currentranklevel'><BR>��ǰ�ȼ���" + _SkillLevel[masteryid] + "</div>"
        var strHTML = strHTML + "<div id='currentspell'>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].str > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].str + " ����"  + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].inte > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].inte + " ����" + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].dex > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].dex + " ����" + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].health > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].health + " ����" + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].energy > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].energy + " ����" + "<BR>"
        strHTML = strHTML + "</div>"
    }
    if (_SkillLevel[masteryid] + 1  <= 40) {
        var strHTML = strHTML +  "<div id='currentranklevel'><BR>��һ�ȼ���" + (_SkillLevel[masteryid] + 1)  + "</div>"
        var strHTML = strHTML + "<div id='nextspell'>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].str > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].str + " ����"  + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].inte > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].inte + " ����" + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].dex > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].dex + " ����" + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].health > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].health + " ����" + "<BR>"
        if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].energy > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]+1].energy + " ����" + "<BR>"
        strHTML = strHTML + "</div>"
        strHTML = strHTML + "<div id='pressadd'><BR>���������Ӽ��ܵ������Ҽ�������ټ��ܵ�����</div>"
    }
    return strHTML
}

function DrawSpell(masteryid,skillid) {
    var SpellText = GetSpellText(masteryid,skillid)
    if (!document.getElementById("tip")) {
        var divtip = document.createElement("div")
        divtip.setAttribute('id',"tip")
        document.body.appendChild(divtip)
    }
    document.getElementById("tip").style.position = "absolute";
    divwidth = document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).offsetWidth / 2
    document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).style.position = "absolute";
    var LeftDiv = document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).offsetLeft + divwidth;
    var TopDiv = document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).offsetTop;
    document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).style.position = "relative";
    divtip = document.getElementById("tip")
    divtip.innerHTML = SpellText
    divtip.style.left = LeftDiv - 100
    if (TopDiv - (divtip.offsetHeight + 50) <= 0 ) {
        if (isIE) {
            divtip.style.top = TopDiv + 75
        }
        else {
            divtip.style.top = TopDiv + 25
        }
    }
    else {
        if (isIE) {
            divtip.style.top = TopDiv - (divtip.offsetHeight + 10)
        }
        else {
            divtip.style.top = TopDiv - (divtip.offsetHeight + 50)
        }
    }
}

function KillTip() {
    if (document.getElementById("tip")) {
        elm = document.getElementById("tip")
        document.body.removeChild(elm)
    }
}

function AddPoint(bolShft,masteryid,button,skillid) {
    switch(ModeSet){ 
        case 0:  
            break; 
        case 1:
            button = 2;
            break; 
        case 2:
            bolShft = 1;
            break; 
        case 3: 
            button = 2;
            bolShft = 1;
            break; 
        default:
    }
    var Points = 1;
    if (bolShft) {
        if (SkillBuff[masteryid] < 4)
            Points = (Mastery[masteryid].Skills[skillid].spells.length - 4 + SkillBuff[masteryid] - UserSkills[masteryid].SkillLevel[skillid] - 1)
        else
            Points = (Mastery[masteryid].Skills[skillid].spells.length - UserSkills[masteryid].SkillLevel[skillid] - 1)
    }
    if (button == 2 )
    {
        RemovePoint(bolShft,masteryid,skillid)
        return false;
    }
    if (_TotalPoints == -30) {
        alert("�Ѵﵽ��Ϸ�趨�Ľ�ɫ��ߵȼ���");
        return false;
    }
    var _TotalPointsTemp = _TotalPoints
    var RewardRemainPointsTemp = RewardRemainPoints
    if (bolShft){
        if (UserSkills[masteryid].SkillLevel[skillid] == 0 ){
            if (RewardRemainPointsTemp > Points - SkillBuff[masteryid]){
                RewardRemainPointsTemp = RewardRemainPointsTemp - Points + SkillBuff[masteryid];
            }
            else{
            	_TotalPointsTemp = _TotalPointsTemp - Points + SkillBuff[masteryid] + RewardRemainPointsTemp;
            	RewardRemainPointsTemp = 0;
            }
        }
        else{
            if (RewardRemainPointsTemp > Points){
                RewardRemainPointsTemp = RewardRemainPointsTemp - Points;
            }
            else{
                _TotalPointsTemp = _TotalPointsTemp - Points + RewardRemainPointsTemp;
            	RewardRemainPointsTemp = 0;
            }
        }
    }
    else{
        if (RewardRemainPointsTemp > Points){
            RewardRemainPointsTemp = RewardRemainPointsTemp - Points;
        }
        else{
            _TotalPointsTemp = _TotalPointsTemp - Points + RewardRemainPointsTemp;
            RewardRemainPointsTemp = 0;
        }
    }
    if (_TotalPointsTemp < -30) {
        alert("�Ѵﵽ��Ϸ�趨�Ľ�ɫ��ߵȼ���");
        return false;
    }
    if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { UserSkills[masteryid].SkillLevel[skillid] = 0 }
    if (SkillBuff[masteryid] < 4){
        if (UserSkills[masteryid].SkillLevel[skillid] + Points < Mastery[masteryid].Skills[skillid].spells.length - 4 + SkillBuff[masteryid]) {
            if (Mastery[masteryid].Skills[skillid].min_points <= _SkillLevel[masteryid] ) {
                var PreReq = Mastery[masteryid].Skills[skillid].prereq
                if ((PreReq >= 0 && UserSkills[masteryid].SkillLevel[PreReq] > 0) || PreReq < 0) {
                    if (bolShft){
                        if (UserSkills[masteryid].SkillLevel[skillid] == 0 )
                            if (RewardRemainPoints > Points - SkillBuff[masteryid]){
                                RewardRemainPoints = RewardRemainPoints - Points + SkillBuff[masteryid];
                            }
                            else{
            	                _TotalPoints = _TotalPoints - Points + SkillBuff[masteryid] + RewardRemainPoints;
            	                RewardRemainPoints = 0;
                            }
                        else{
                            if (RewardRemainPoints > Points){
                                RewardRemainPoints = RewardRemainPoints - Points;
                            }
                            else{
                                _TotalPoints = _TotalPoints - Points + RewardRemainPoints;
                            	RewardRemainPoints = 0;
                            }
                        }
                        UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points
                    }
                    else{
                        if (UserSkills[masteryid].SkillLevel[skillid] == 0 )
                            UserSkills[masteryid].SkillLevel[skillid] = (1 + SkillBuff[masteryid]) 
                        else
                            UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points
                        if (RewardRemainPoints > Points){
                            RewardRemainPoints = RewardRemainPoints - Points;
                        }
                        else{
                            _TotalPoints = _TotalPoints - Points + RewardRemainPoints;
                            RewardRemainPoints = 0;
                        }
                    }
                    document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + ((Mastery[masteryid].Skills[skillid].spells.length)  - 5)
                    UpdateSkillStats(masteryid)
                    DrawSpell(masteryid,skillid)
                    DrawSpellList()
                }
            }
            if (_TotalPoints == -30) {
                alert("�Ѵﵽ��Ϸ�趨�Ľ�ɫ��ߵȼ���");
                return false;
            }
        }
    }
    else{
        if (UserSkills[masteryid].SkillLevel[skillid] + Points < Mastery[masteryid].Skills[skillid].spells.length) {
            if (Mastery[masteryid].Skills[skillid].min_points <= _SkillLevel[masteryid] ) {
                var PreReq = Mastery[masteryid].Skills[skillid].prereq
                if ((PreReq >= 0 && UserSkills[masteryid].SkillLevel[PreReq] > 0) || PreReq < 0) {
                    if (SkillBuff[masteryid] < Mastery[masteryid].Skills[skillid].spells.length - 1){
                        if (bolShft){
                            if (UserSkills[masteryid].SkillLevel[skillid] == 0 )
                                if (RewardRemainPoints > Points - SkillBuff[masteryid]){
                                    RewardRemainPoints = RewardRemainPoints - Points + SkillBuff[masteryid];
                                }
                                else{
            	                    _TotalPoints = _TotalPoints - Points + SkillBuff[masteryid] + RewardRemainPoints;
            	                    RewardRemainPoints = 0;
                                }
                            else{
                                if (RewardRemainPoints > Points){
                                    RewardRemainPoints = RewardRemainPoints - Points;
                                }
                                else{
                                    _TotalPoints = _TotalPoints - Points + RewardRemainPoints;
                                	RewardRemainPoints = 0;
                                }
                            }
                            UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points
                        }
                        else{
                            if (UserSkills[masteryid].SkillLevel[skillid] == 0 )
                                UserSkills[masteryid].SkillLevel[skillid] = (1 + SkillBuff[masteryid]) 
                            else
                                UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points
                            if (RewardRemainPoints > Points){
                                RewardRemainPoints = RewardRemainPoints - Points;
                            }
                            else{
                                _TotalPoints = _TotalPoints - Points + RewardRemainPoints;
                                RewardRemainPoints = 0;
                            }
                        }
                    }
                    else{
                        if (RewardRemainPoints > 1){
                            RewardRemainPoints = RewardRemainPoints - 1;
                        }
                        else{
                            _TotalPoints = _TotalPoints - 1 + RewardRemainPoints;
                            RewardRemainPoints = 0;
                        }
                        UserSkills[masteryid].SkillLevel[skillid] = Mastery[masteryid].Skills[skillid].spells.length - 1
                    }
                    document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + ((Mastery[masteryid].Skills[skillid].spells.length)  - 5)
                    UpdateSkillStats(masteryid)
                    DrawSpell(masteryid,skillid)
                    DrawSpellList()
                }
            }
            if (_TotalPoints == -30) {
                alert("�Ѵﵽ��Ϸ�趨�Ľ�ɫ��ߵȼ���");
                return false;
            }
        }
    }
}

function RemovePoint(bolShft,masteryid,skillid) {
    if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { UserSkills[masteryid].SkillLevel[skillid] = 0 }
    var Points = 1;
    if (bolShft) {
        Points = UserSkills[masteryid].SkillLevel[skillid];
    }
    for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
        if (Mastery[masteryid].Skills[x].prereq == skillid && UserSkills[masteryid].SkillLevel[x] > 0) {
            if (SkillBuff[masteryid] > Mastery[masteryid].Skills[skillid].spells.length - 2){
                return false ;
            }
            else{
                if (bolShft){
                    if (UserSkills[masteryid].SkillLevel[skillid] - Points == 0) {
                        return false ;
                    }
                }
                else {
                    if (UserSkills[masteryid].SkillLevel[skillid] - Points == SkillBuff[masteryid]) {
                        return false ;
                    }
                }
            }
        }
    }
    if (UserSkills[masteryid].SkillLevel[skillid] - 1 >= 0) {
        if (SkillBuff[masteryid] > Mastery[masteryid].Skills[skillid].spells.length - 2){
            UserSkills[masteryid].SkillLevel[skillid] = 0
            _TotalPoints = _TotalPoints + 1;
        }
        else{
            if (bolShft){
                UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] - Points
                _TotalPoints = _TotalPoints + Points - SkillBuff[masteryid];
            }
            else {
                if (UserSkills[masteryid].SkillLevel[skillid] == (1 + SkillBuff[masteryid]) )
                    UserSkills[masteryid].SkillLevel[skillid] = 0 
                else
                    UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] - Points
                _TotalPoints = _TotalPoints + Points;
            }
        }
        document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " / " + ((Mastery[masteryid].Skills[skillid].spells.length)  - 5)
        UpdateSkillStats(masteryid)
        DrawSpell(masteryid,skillid)
        DrawSpellList()
    }
}

function DrawSpellList() {
    var SpellList = ""
    var SpellFound = false;
    for (var y = 0 ; y < Mastery.length; y++ ) {
        if (Mastery[y]) {
            SpellList = SpellList + "<div id='masteryname'>" + Mastery[y].masteryname + "</div>"
            for (var x = 0; x < (Skills.length)  ; x++) {
                if (UserSkills[y])
                    spellrank = UserSkills[y].SkillLevel[x];
                else
                    spellrank = 0;
                if (Mastery[y].Skills[x].spells[spellrank]) {
                    SpellFound = true;
                    if (document.getElementById("verbose").checked) {
                        SpellList = SpellList + "<hr noshade size=1>"
                    }
                    SpellList = SpellList + "<B>" + Mastery[y].Skills[x].name + "</B>�����ȼ���" + UserSkills[y].SkillLevel[x] + " / " + (Mastery[y].Skills[x].spells.length - 5) + "��<BR>"
                    if (document.getElementById("verbose").checked) {
                        SpellList = SpellList + Mastery[y].Skills[x].desc + "<BR>"
                        SpellList = SpellList + Mastery[y].Skills[x].spells[spellrank].spellinfo + "<BR>"
                    }
                }
            }
            SpellList = SpellList + "<BR>"
        }
    }
    if (!SpellFound) { SpellList = '��δѡȡ����' }
    document.getElementById("spells").innerHTML = SpellList;
//    UpdateLinkBack()
}

function UpdateLinkBack() {
    var HTML = ""
    HTML = 'http://www.titancalc.com/TitanCalc.asp?mastery=' + _MasteryName + '&master1=' + _Mastery1 + '&master2=' + _Mastery2
    var TempM1 = ""
    var SkillLevel1 = 0
    var SkillLevel2 = 0
    if (UserSkills[_Mastery1]) {
        SkillLevel1 = _SkillLevel[_Mastery1]
        for (var x = 0 ; x <= UserSkills[_Mastery1].SkillLevel.length ; x++) {
            if (UserSkills[_Mastery1].SkillLevel[x]) {
                TempM1 = TempM1 + UserSkills[_Mastery1].SkillLevel[x] + "-"
            }
            else {
                TempM1 = TempM1 + "0-"
            }
        }
    }
    var TempM2 = ""
    if (UserSkills[_Mastery2]) {
        SkillLevel2 = _SkillLevel[_Mastery2]
        for (var x = 0 ; x <= UserSkills[_Mastery2].SkillLevel.length ; x++) {
            if (UserSkills[_Mastery2].SkillLevel[x])
                TempM2 = TempM2 + UserSkills[_Mastery2].SkillLevel[x] + "-"
            else
                TempM2 = TempM2 + "0-"
        }
    }
    TempM1 =  SkillLevel1 + "-" + TempM1
    TempM2 =  SkillLevel2 + "-" + TempM2
    TempM1 = TempM1.substring(0,TempM1.length -1 )
    TempM2 = TempM2.substring(0,TempM2.length -1 )
    document.getElementById("linkback").value = HTML + '&m1=' + TempM1 + "&m2=" + TempM2
}

function SetFormFromReturn(string,masteryid) {
    var Elms = string.split("-")
    _TotalPoints = _TotalPoints - Elms[0];
    _SkillLevel[masteryid] = Elms[0];
    UpdateSkillBar(masteryid)
    for (var x = 1; x < Elms.length; x++) {
        UserSkills[masteryid].SkillLevel[x-1] = parseInt(Elms[x])
    }
    for (var x = 0; x < (Mastery[masteryid].Skills.length)  ; x++) {
        if (document.getElementById("spell_" + masteryid + '_' + (x+1))) {
            if (UserSkills[masteryid].SkillLevel[x]) {
                if (UserSkills[masteryid].SkillLevel[x] <= ((Mastery[masteryid].Skills[x].spells.length)  - 1 )) {
                    document.getElementById("spell_" + masteryid + '_' + (x+1)).innerHTML = UserSkills[masteryid].SkillLevel[x] + " / " + ((Mastery[masteryid].Skills[x].spells.length)  - 5)
                    _TotalPoints = _TotalPoints - UserSkills[masteryid].SkillLevel[x]
                }
                else {
                    document.getElementById("spell_" + masteryid + '_' + (x+1)).innerHTML = ((Mastery[masteryid].Skills[x].spells.length)  - 1) + " / " + ((Mastery[masteryid].Skills[x].spells.length)  - 5)
                    UserSkills[masteryid].SkillLevel[x] = ((Mastery[masteryid].Skills[x].spells.length)  - 1)
                    _TotalPoints = _TotalPoints - ((Mastery[masteryid].Skills[x].spells.length)  - 1)
                }
            }
            else {
                document.getElementById("spell_" + masteryid + '_' + (x+1)).innerHTML = "0 / " + ((Mastery[masteryid].Skills[x].spells.length)  - 5)
            }
        }
    }
    UpdateSkillStats(masteryid)
    DrawSpellList()
}

document.oncontextmenu =
function(){return false}