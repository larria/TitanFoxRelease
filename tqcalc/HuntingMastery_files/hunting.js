function Skill(name,min_points,spells,prereq,desc) {
this.name = name
this.min_points = min_points
this.desc = desc
this.spells = spells
this.prereq = prereq
}
function Attribute(Hth,Egy,Str,Dex,Int) {
this.str = Str
this.dex = Dex
this.health = Hth
this.inte = Int
this.energy = Egy
}
function SpellInfo(spellinfo) {
this.spellinfo = spellinfo
}
function setmastery(Skills,Attributes) {
this.Skills = Skills
this.masteryid = 7
this.masteryname = "狩猎专精"
this.Attributes = Attributes
}
if (!AttributesBase[0]) {
AttributesBase[0] = new Attribute(300,300,50,50,50)
}
Attributes = new Array();
Attributes[1] = new Attribute(35,0,2,2,0)
Attributes[2] = new Attribute(70,0,3,5,0)
Attributes[3] = new Attribute(105,0,5,7,0)
Attributes[4] = new Attribute(140,0,7,10,0)
Attributes[5] = new Attribute(175,0,9,12,0)
Attributes[6] = new Attribute(210,0,10,15,0)
Attributes[7] = new Attribute(245,0,12,17,0)
Attributes[8] = new Attribute(280,0,14,20,0)
Attributes[9] = new Attribute(315,0,16,22,0)
Attributes[10] = new Attribute(350,0,17,25,0)
Attributes[11] = new Attribute(385,0,19,27,0)
Attributes[12] = new Attribute(420,0,21,30,0)
Attributes[13] = new Attribute(455,0,23,32,0)
Attributes[14] = new Attribute(490,0,24,35,0)
Attributes[15] = new Attribute(525,0,26,37,0)
Attributes[16] = new Attribute(560,0,28,40,0)
Attributes[17] = new Attribute(595,0,30,42,0)
Attributes[18] = new Attribute(630,0,31,45,0)
Attributes[19] = new Attribute(665,0,33,47,0)
Attributes[20] = new Attribute(700,0,35,50,0)
Attributes[21] = new Attribute(735,0,37,52,0)
Attributes[22] = new Attribute(770,0,38,55,0)
Attributes[23] = new Attribute(805,0,40,57,0)
Attributes[24] = new Attribute(840,0,42,60,0)
Attributes[25] = new Attribute(875,0,44,62,0)
Attributes[26] = new Attribute(910,0,45,65,0)
Attributes[27] = new Attribute(945,0,47,67,0)
Attributes[28] = new Attribute(980,0,49,70,0)
Attributes[29] = new Attribute(1015,0,51,72,0)
Attributes[30] = new Attribute(1050,0,52,75,0)
Attributes[31] = new Attribute(1085,0,54,77,0)
Attributes[32] = new Attribute(1120,0,56,80,0)
Attributes[33] = new Attribute(1155,0,58,83,0)
Attributes[34] = new Attribute(1190,0,60,85,0)
Attributes[35] = new Attribute(1225,0,61,88,0)
Attributes[36] = new Attribute(1260,0,63,90,0)
Attributes[37] = new Attribute(1295,0,65,93,0)
Attributes[38] = new Attribute(1330,0,67,95,0)
Attributes[39] = new Attribute(1365,0,68,98,0)
Attributes[40] = new Attribute(1400,0,70,100,0)
Skills = new Array();
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>15 法力消耗<br>3.0 秒持续时间<br>0.5 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[2] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>17 法力消耗<br>4.0 秒持续时间<br>0.6 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[3] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>19 法力消耗<br>5.1 秒持续时间<br>0.7 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[4] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>20 法力消耗<br>6.3 秒持续时间<br>0.8 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[5] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>22 法力消耗<br>7.6 秒持续时间<br>0.9 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[6] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>24 法力消耗<br>9.0 秒持续时间<br>1.0 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[7] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>25 法力消耗<br>10.5 秒持续时间<br>1.1 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[8] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>27 法力消耗<br>11.1 秒持续时间<br>1.2 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[9] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>29 法力消耗<br>12.8 秒持续时间<br>1.3 米范围<br>-300 点防御能力<br>-25% 移动速度")
Spells[10] = new SpellInfo("<font color=#33FFCC>3.0 秒冷却</font><br>31 法力消耗<br>14.6 秒持续时间<br>1.4 米范围<br>-300 点防御能力<br>-25% 移动速度")
Skills[0] = new Skill("<font color=#00B8F5>诱捕</font>",1,Spells,-1,"<font color=#FFF52B>在敌人脚下放置一个加重的网以阻止其移动，但如果你在他们的攻击范围内是无法阻止敌人攻击的。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>30 法力消耗<br>25 穿刺伤害<br>8% 减少敌人生命值<br>+300% 移动速度")
Spells[2] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>32 法力消耗<br>36 穿刺伤害<br>12% 减少敌人生命值<br>+300% 移动速度")
Spells[3] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>34 法力消耗<br>48 穿刺伤害<br>15% 减少敌人生命值<br>+300% 移动速度")
Spells[4] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>36 法力消耗<br>62 穿刺伤害<br>18% 减少敌人生命值<br>+300% 移动速度")
Spells[5] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>38 法力消耗<br>72 穿刺伤害<br>21% 减少敌人生命值<br>+300% 移动速度")
Spells[6] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>40 法力消耗<br>82 穿刺伤害<br>24% 减少敌人生命值<br>+300% 移动速度")
Spells[7] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>42 法力消耗<br>91 穿刺伤害<br>26% 减少敌人生命值<br>+300% 移动速度")
Spells[8] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>44 法力消耗<br>103 穿刺伤害<br>28% 减少敌人生命值<br>+300% 移动速度")
Spells[9] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>46 法力消耗<br>112 穿刺伤害<br>30% 减少敌人生命值<br>+300% 移动速度")
Spells[10] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>48 法力消耗<br>122 穿刺伤害<br>32% 减少敌人生命值<br>+300% 移动速度")
Spells[11] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>50 法力消耗<br>131 穿刺伤害<br>34% 减少敌人生命值<br>+300% 移动速度")
Spells[12] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>52 法力消耗<br>143 穿刺伤害<br>36% 减少敌人生命值<br>+300% 移动速度")
Spells[13] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>54 法力消耗<br>152 穿刺伤害<br>38% 减少敌人生命值<br>+300% 移动速度")
Spells[14] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>56 法力消耗<br>162 穿刺伤害<br>40% 减少敌人生命值<br>+300% 移动速度")
Spells[15] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>58 法力消耗<br>173 穿刺伤害<br>42% 减少敌人生命值<br>+300% 移动速度")
Spells[16] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>60 法力消耗<br>187 穿刺伤害<br>45% 减少敌人生命值<br>+300% 移动速度")
Skills[1] = new Skill("<font color=#00B8F5>猛刺</font>",1,Spells,-1,"<font color=#FFF52B>用手中的长矛发动凶猛的一戳，造成破坏性的穿刺伤害，打掉敌人部分生命。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+62 点防御能力<br>+5% 攻击速度")
Spells[2] = new SpellInfo("+94 点防御能力<br>+8% 攻击速度")
Spells[3] = new SpellInfo("+126 点防御能力<br>+12% 攻击速度")
Spells[4] = new SpellInfo("+158 点防御能力<br>+16% 攻击速度")
Spells[5] = new SpellInfo("+190 点防御能力<br>+20% 攻击速度")
Spells[6] = new SpellInfo("+222 点防御能力<br>+24% 攻击速度")
Spells[7] = new SpellInfo("+254 点防御能力<br>+26% 攻击速度")
Spells[8] = new SpellInfo("+286 点防御能力<br>+28% 攻击速度")
Spells[9] = new SpellInfo("+318 点防御能力<br>+30% 攻击速度")
Spells[10] = new SpellInfo("+350 点防御能力<br>+33% 攻击速度")
Skills[2] = new Skill("<font color=#00B8F5>树木学识</font>",1,Spells,-1,"<font color=#FFF52B>擅用弓、矛或投掷物体狩猎是在野外生存的重要能力。娴熟地掌握这些传统武器令你使用它们的时候速度非凡，姿态优雅。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("2 法力消耗<br>4 穿刺伤害<br>+30% 加快投射速度")
Spells[2] = new SpellInfo("2 法力消耗<br>8 穿刺伤害<br>+40% 加快投射速度")
Spells[3] = new SpellInfo("2 法力消耗<br>12 穿刺伤害<br>+50% 加快投射速度")
Spells[4] = new SpellInfo("2 法力消耗<br>16 穿刺伤害<br>+60% 加快投射速度")
Spells[5] = new SpellInfo("2 法力消耗<br>20 穿刺伤害<br>+70% 加快投射速度")
Spells[6] = new SpellInfo("2 法力消耗<br>24 穿刺伤害<br>+80% 加快投射速度")
Spells[7] = new SpellInfo("2 法力消耗<br>28 穿刺伤害<br>+90% 加快投射速度")
Spells[8] = new SpellInfo("2 法力消耗<br>33 穿刺伤害<br>+100% 加快投射速度")
Spells[9] = new SpellInfo("2 法力消耗<br>38 穿刺伤害<br>+110% 加快投射速度")
Spells[10] = new SpellInfo("2 法力消耗<br>43 穿刺伤害<br>+120% 加快投射速度")
Spells[11] = new SpellInfo("2 法力消耗<br>49 穿刺伤害<br>+130% 加快投射速度")
Spells[12] = new SpellInfo("2 法力消耗<br>55 穿刺伤害<br>+140% 加快投射速度")
Spells[13] = new SpellInfo("2 法力消耗<br>61 穿刺伤害<br>+150% 加快投射速度")
Spells[14] = new SpellInfo("2 法力消耗<br>67 穿刺伤害<br>+160% 加快投射速度")
Spells[15] = new SpellInfo("2 法力消耗<br>74 穿刺伤害<br>+170% 加快投射速度")
Spells[16] = new SpellInfo("2 法力消耗<br>81 穿刺伤害<br>+180% 加快投射速度")
Skills[3] = new Skill("<font color=#00B8F5>射术</font>",4,Spells,-1,"<font color=#FFF52B>射术技能容许你射击或抛出的投射物能加速飞行，并增加刺穿伤害。可将此技能分配于鼠标左键。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+12% 穿刺伤害<br>+15% 流血伤害<br>减少 +75 法力上限<br>+3 伤害对 兽人<br>+3 伤害对 野兽")
Spells[2] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+18% 穿刺伤害<br>+18% 流血伤害<br>减少 +75 法力上限<br>+5 伤害对 兽人<br>+5 伤害对 野兽")
Spells[3] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+23% 穿刺伤害<br>+21% 流血伤害<br>减少 +75 法力上限<br>+8 伤害对 兽人<br>+8 伤害对 野兽")
Spells[4] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+30% 穿刺伤害<br>+24% 流血伤害<br>减少 +75 法力上限<br>+10 伤害对 兽人<br>+10 伤害对 野兽")
Spells[5] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+34% 穿刺伤害<br>+27% 流血伤害<br>减少 +75 法力上限<br>+12 伤害对 兽人<br>+12 伤害对 野兽")
Spells[6] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+40% 穿刺伤害<br>+30% 流血伤害<br>减少 +75 法力上限<br>+15 伤害对 兽人<br>+15 伤害对 野兽")
Spells[7] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+45% 穿刺伤害<br>+33% 流血伤害<br>减少 +75 法力上限<br>+17 伤害对 兽人<br>+17 伤害对 野兽")
Spells[8] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+52% 穿刺伤害<br>+36% 流血伤害<br>减少 +75 法力上限<br>+19 伤害对 兽人<br>+19 伤害对 野兽")
Spells[9] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+56% 穿刺伤害<br>+39% 流血伤害<br>减少 +75 法力上限<br>+22 伤害对 兽人<br>+22 伤害对 野兽")
Spells[10] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+62% 穿刺伤害<br>+42% 流血伤害<br>减少 +75 法力上限<br>+25 伤害对 兽人<br>+25 伤害对 野兽")
Spells[11] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+67% 穿刺伤害<br>+45% 流血伤害<br>减少 +75 法力上限<br>+27 伤害对 兽人<br>+27 伤害对 野兽")
Spells[12] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+75% 穿刺伤害<br>+48% 流血伤害<br>减少 +75 法力上限<br>+30 伤害对 兽人<br>+30 伤害对 野兽")
Spells[13] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+83% 穿刺伤害<br>+51% 流血伤害<br>减少 +75 法力上限<br>+34 伤害对 兽人<br>+34 伤害对 野兽")
Spells[14] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+91% 穿刺伤害<br>+54% 流血伤害<br>减少 +75 法力上限<br>+39 伤害对 兽人<br>+39 伤害对 野兽")
Spells[15] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+101% 穿刺伤害<br>+57% 流血伤害<br>减少 +75 法力上限<br>+45 伤害对 兽人<br>+45 伤害对 野兽")
Spells[16] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>15.0 米范围<br>+115% 穿刺伤害<br>+60% 流血伤害<br>减少 +75 法力上限<br>+51 伤害对 兽人<br>+51 伤害对 野兽")
Skills[4] = new Skill("<font color=#00B8F5>狩猎艺术</font>",4,Spells,-1,"<font color=#FFF52B>狩猎的经验令你面对熟悉的猎物时具有优势。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("35 法力消耗<br>180.0 秒持续时间<br>每秒 +3.0 点生命恢复<br>30% 毒素抗性")
Spells[2] = new SpellInfo("40 法力消耗<br>240.0 秒持续时间<br>每秒 +3.6 点生命恢复<br>38% 毒素抗性")
Spells[3] = new SpellInfo("45 法力消耗<br>300.0 秒持续时间<br>每秒 +4.2 点生命恢复<br>46% 毒素抗性")
Spells[4] = new SpellInfo("50 法力消耗<br>360.0 秒持续时间<br>每秒 +4.8 点生命恢复<br>54% 毒素抗性")
Spells[5] = new SpellInfo("55 法力消耗<br>420.0 秒持续时间<br>每秒 +5.4 点生命恢复<br>66% 毒素抗性")
Spells[6] = new SpellInfo("60 法力消耗<br>480.0 秒持续时间<br>每秒 +6.0 点生命恢复<br>72% 毒素抗性")
Spells[7] = new SpellInfo("65 法力消耗<br>540.0 秒持续时间<br>每秒 +6.6 点生命恢复<br>80% 毒素抗性")
Spells[8] = new SpellInfo("70 法力消耗<br>600.0 秒持续时间<br>每秒 +7.2 点生命恢复<br>86% 毒素抗性")
Spells[9] = new SpellInfo("75 法力消耗<br>660.0 秒持续时间<br>每秒 +7.8 点生命恢复<br>92% 毒素抗性")
Spells[10] = new SpellInfo("80 法力消耗<br>720.0 秒持续时间<br>每秒 +8.4 点生命恢复<br>100% 毒素抗性")
Skills[5] = new Skill("<font color=#00B8F5>草本治疗</font>",4,Spells,-1,"<font color=#FFF52B>在土地上居住，你学会辨认和利用药用植物去制造治疗药膏。当使用时，它将会增强身体对中毒的抵抗并短时内提升治疗速度。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("18 流血伤害 每秒")
Spells[2] = new SpellInfo("25 流血伤害 每秒")
Spells[3] = new SpellInfo("33 流血伤害 每秒")
Spells[4] = new SpellInfo("40 流血伤害 每秒")
Spells[5] = new SpellInfo("47 流血伤害 每秒")
Spells[6] = new SpellInfo("56 流血伤害 每秒")
Spells[7] = new SpellInfo("63 流血伤害 每秒")
Spells[8] = new SpellInfo("70 流血伤害 每秒")
Spells[9] = new SpellInfo("78 流血伤害 每秒")
Spells[10] = new SpellInfo("85 流血伤害 每秒")
Spells[11] = new SpellInfo("92 流血伤害 每秒")
Spells[12] = new SpellInfo("101 流血伤害 每秒")
Skills[6] = new Skill("<font color=#00B8F5>倒刺猎网</font>",10,Spells,0,"<font color=#FFF52B>猎人的诱捕网上带刺的钩子会在敌人挣扎时划破皮肤并且令他们流血。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>45 法力消耗<br>28.0 秒持续时间<br>15.0 米范围<br>18 流血伤害在 3.0 秒内<br>+15% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[2] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>47 法力消耗<br>31.0 秒持续时间<br>15.0 米范围<br>22 流血伤害在 3.0 秒内<br>+17% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[3] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>49 法力消耗<br>33.0 秒持续时间<br>15.0 米范围<br>26 流血伤害在 3.0 秒内<br>+19% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[4] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>51 法力消耗<br>36.0 秒持续时间<br>15.0 米范围<br>30 流血伤害在 3.0 秒内<br>+22% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[5] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>53 法力消耗<br>42.0 秒持续时间<br>15.0 米范围<br>34 流血伤害在 3.0 秒内<br>+24% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[6] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>55 法力消耗<br>44.0 秒持续时间<br>15.0 米范围<br>38 流血伤害在 3.0 秒内<br>+26% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[7] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>57 法力消耗<br>47.0 秒持续时间<br>15.0 米范围<br>41 流血伤害在 3.0 秒内<br>+28% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[8] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>59 法力消耗<br>50.0 秒持续时间<br>15.0 米范围<br>46 流血伤害在 3.0 秒内<br>+31% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[9] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>61 法力消耗<br>52.0 秒持续时间<br>15.0 米范围<br>50 流血伤害在 3.0 秒内<br>+33% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[10] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>63 法力消耗<br>58.0 秒持续时间<br>15.0 米范围<br>56 流血伤害在 3.0 秒内<br>+35% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[11] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>65 法力消耗<br>60.0 秒持续时间<br>15.0 米范围<br>62 流血伤害在 3.0 秒内<br>+37% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Spells[12] = new SpellInfo("<font color=#33FFCC>180.0 秒冷却</font><br>67 法力消耗<br>64.0 秒持续时间<br>15.0 米范围<br>70 流血伤害在 3.0 秒内<br>+40% 攻击速度<br>+33% 伤害对 兽人<br>+33% 伤害对 野兽")
Skills[7] = new Skill("<font color=#00B8F5>狩猎呼唤</font>",10,Spells,-1,"<font color=#FFF52B>回应呼唤的人会以更高速和灵巧的技术战斗。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("5 法力消耗<br>83 流血伤害在 3.0 秒内")
Spells[2] = new SpellInfo("5 法力消耗<br>113 流血伤害在 3.0 秒内")
Spells[3] = new SpellInfo("5 法力消耗<br>150 流血伤害在 3.0 秒内")
Spells[4] = new SpellInfo("5 法力消耗<br>180 流血伤害在 3.0 秒内")
Spells[5] = new SpellInfo("5 法力消耗<br>210 流血伤害在 3.0 秒内")
Spells[6] = new SpellInfo("5 法力消耗<br>248 流血伤害在 3.0 秒内")
Spells[7] = new SpellInfo("5 法力消耗<br>278 流血伤害在 3.0 秒内")
Spells[8] = new SpellInfo("5 法力消耗<br>308 流血伤害在 3.0 秒内")
Spells[9] = new SpellInfo("5 法力消耗<br>345 流血伤害在 3.0 秒内")
Spells[10] = new SpellInfo("5 法力消耗<br>375 流血伤害在 3.0 秒内")
Spells[11] = new SpellInfo("5 法力消耗<br>405 流血伤害在 3.0 秒内")
Spells[12] = new SpellInfo("5 法力消耗<br>443 流血伤害在 3.0 秒内")
Spells[13] = new SpellInfo("5 法力消耗<br>473 流血伤害在 3.0 秒内")
Spells[14] = new SpellInfo("5 法力消耗<br>503 流血伤害在 3.0 秒内")
Skills[8] = new Skill("<font color=#00B8F5>刨取内脏</font>",10,Spells,1,"<font color=#FFF52B>瞄准敌人的致命弱点造成持续的出血性伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>34 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　80 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>5.0 米范围</font>")
Spells[2] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>38 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　100 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>6.0 米范围</font>")
Spells[3] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>42 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　123 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>7.0 米范围</font>")
Spells[4] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>46 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　147 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>8.0 米范围</font>")
Spells[5] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>50 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　170 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>9.0 米范围</font>")
Spells[6] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>54 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　197 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>10.0 米范围</font>")
Spells[7] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>58 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　223 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>11.0 米范围</font>")
Spells[8] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>62 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　257 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>12.0 米范围</font>")
Spells[9] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>66 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　297 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>13.0 米范围</font>")
Spells[10] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>70 法力消耗<br>增加生命时间 30 秒<br>3 召唤上限<br>引诱 属性：<br>持续时间 30.0 秒<br>　344 生命<br>　15 法力<br><br>引诱 能力：<font color=#33CCFF><br>挑拔离间</font><br><font color=#00A3FF>15 法力消耗<br>14.0 米范围</font>")
Skills[9] = new Skill("<font color=#00B8F5>引诱</font>",10,Spells,-1,"<font color=#FFF52B>抛下诱饵以吸引附近怪物的注意力。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-21% 物理伤害抗性<br>-21% 穿刺抵抗")
Spells[2] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-26% 物理伤害抗性<br>-25% 穿刺抵抗")
Spells[3] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-30% 物理伤害抗性<br>-29% 穿刺抵抗")
Spells[4] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-34% 物理伤害抗性<br>-33% 穿刺抵抗")
Spells[5] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-38% 物理伤害抗性<br>-38% 穿刺抵抗")
Spells[6] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-42% 物理伤害抗性<br>-42% 穿刺抵抗")
Spells[7] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-46% 物理伤害抗性<br>-46% 穿刺抵抗")
Spells[8] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-50% 物理伤害抗性<br>-50% 穿刺抵抗")
Spells[9] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-54% 物理伤害抗性<br>-54% 穿刺抵抗")
Spells[10] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-58% 物理伤害抗性<br>-58% 穿刺抵抗")
Spells[11] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-62% 物理伤害抗性<br>-62% 穿刺抵抗")
Spells[12] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>35 法力消耗<br>8.0 秒持续时间<br>6.0 米范围<br>-66% 物理伤害抗性<br>-66% 穿刺抵抗")
Skills[10] = new Skill("<font color=#00B8F5>狩猎大师</font>",16,Spells,-1,"<font color=#FFF52B>从远距离观察你的猎物可以发现其弱点，从而造成更大的穿刺伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("1 法力消耗<br>8.0% 机率穿透敌人<br>+5% 穿刺伤害<br>+9% 流血伤害")
Spells[2] = new SpellInfo("1 法力消耗<br>12.0% 机率穿透敌人<br>+8% 穿刺伤害<br>+12% 流血伤害")
Spells[3] = new SpellInfo("1 法力消耗<br>16.0% 机率穿透敌人<br>+10% 穿刺伤害<br>+15% 流血伤害")
Spells[4] = new SpellInfo("1 法力消耗<br>21.0% 机率穿透敌人<br>+12% 穿刺伤害<br>+20% 流血伤害")
Spells[5] = new SpellInfo("1 法力消耗<br>25.0% 机率穿透敌人<br>+15% 穿刺伤害<br>+23% 流血伤害")
Spells[6] = new SpellInfo("1 法力消耗<br>29.0% 机率穿透敌人<br>+18% 穿刺伤害<br>+27% 流血伤害")
Spells[7] = new SpellInfo("1 法力消耗<br>33.0% 机率穿透敌人<br>+20% 穿刺伤害<br>+30% 流血伤害")
Spells[8] = new SpellInfo("1 法力消耗<br>38.0% 机率穿透敌人<br>+22% 穿刺伤害<br>+35% 流血伤害")
Spells[9] = new SpellInfo("1 法力消耗<br>42.0% 机率穿透敌人<br>+25% 穿刺伤害<br>+38% 流血伤害")
Spells[10] = new SpellInfo("1 法力消耗<br>46.0% 机率穿透敌人<br>+28% 穿刺伤害<br>+42% 流血伤害")
Spells[11] = new SpellInfo("1 法力消耗<br>50.0% 机率穿透敌人<br>+30% 穿刺伤害<br>+45% 流血伤害")
Spells[12] = new SpellInfo("1 法力消耗<br>55.0% 机率穿透敌人<br>+33% 穿刺伤害<br>+50% 流血伤害")
Spells[13] = new SpellInfo("1 法力消耗<br>59.0% 机率穿透敌人<br>+35% 穿刺伤害<br>+50% 流血伤害")
Spells[14] = new SpellInfo("1 法力消耗<br>63.0% 机率穿透敌人<br>+38% 穿刺伤害<br>+50% 流血伤害")
Spells[15] = new SpellInfo("1 法力消耗<br>68.0% 机率穿透敌人<br>+41% 穿刺伤害<br>+50% 流血伤害")
Spells[16] = new SpellInfo("1 法力消耗<br>75.0% 机率穿透敌人<br>+45% 穿刺伤害<br>+50% 流血伤害")
Skills[11] = new Skill("<font color=#00B8F5>穿刺射击</font>",16,Spells,3,"<font color=#FFF52B>为箭矢装备上流线形的箭杆可以让箭矢穿越目标并对轨道上的其他敌人造成伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("6% 机率被使用<br>72 流血伤害在 3.0 秒内")
Spells[2] = new SpellInfo("8% 机率被使用<br>108 流血伤害在 3.0 秒内")
Spells[3] = new SpellInfo("10% 机率被使用<br>149 流血伤害在 3.0 秒内")
Spells[4] = new SpellInfo("12% 机率被使用<br>194 流血伤害在 3.0 秒内")
Spells[5] = new SpellInfo("14% 机率被使用<br>243 流血伤害在 3.0 秒内")
Spells[6] = new SpellInfo("16% 机率被使用<br>297 流血伤害在 3.0 秒内")
Spells[7] = new SpellInfo("17% 机率被使用<br>356 流血伤害在 3.0 秒内")
Spells[8] = new SpellInfo("18% 机率被使用<br>419 流血伤害在 3.0 秒内")
Spells[9] = new SpellInfo("19% 机率被使用<br>486 流血伤害在 3.0 秒内")
Spells[10] = new SpellInfo("20% 机率被使用<br>563 流血伤害在 3.0 秒内")
Skills[12] = new Skill("<font color=#00B8F5>凿击</font>",16,Spells,-1,"<font color=#FFF52B>一种使用矛或弓的战斗技巧，可造成伤口长时间出血。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+8% 机率躲避投射物<br>减少 +10 法力上限")
Spells[2] = new SpellInfo("+10% 机率躲避投射物<br>减少 +10 法力上限")
Spells[3] = new SpellInfo("+12% 机率躲避投射物<br>减少 +10 法力上限")
Spells[4] = new SpellInfo("+15% 机率躲避投射物<br>减少 +10 法力上限")
Spells[5] = new SpellInfo("+17% 机率躲避投射物<br>减少 +10 法力上限")
Spells[6] = new SpellInfo("+19% 机率躲避投射物<br>减少 +10 法力上限")
Spells[7] = new SpellInfo("+23% 机率躲避投射物<br>减少 +10 法力上限")
Spells[8] = new SpellInfo("+25% 机率躲避投射物<br>减少 +10 法力上限")
Spells[9] = new SpellInfo("+27% 机率躲避投射物<br>减少 +10 法力上限")
Spells[10] = new SpellInfo("+29% 机率躲避投射物<br>减少 +10 法力上限")
Spells[11] = new SpellInfo("+32% 机率躲避投射物<br>减少 +10 法力上限")
Spells[12] = new SpellInfo("+35% 机率躲避投射物<br>减少 +10 法力上限")
Skills[13] = new Skill("<font color=#00B8F5>掩护</font>",16,Spells,4,"<font color=#FFF52B>可在进行攻击时利用掩护来避免无谓的伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("10 法力消耗<br>+58% 穿刺伤害<br>+58% 流血伤害")
Spells[2] = new SpellInfo("10 法力消耗<br>+66% 穿刺伤害<br>+66% 流血伤害")
Spells[3] = new SpellInfo("10 法力消耗<br>+77% 穿刺伤害<br>+77% 流血伤害")
Spells[4] = new SpellInfo("10 法力消耗<br>+85% 穿刺伤害<br>+85% 流血伤害")
Spells[5] = new SpellInfo("10 法力消耗<br>+93% 穿刺伤害<br>+93% 流血伤害")
Spells[6] = new SpellInfo("10 法力消耗<br>+104% 穿刺伤害<br>+104% 流血伤害")
Spells[7] = new SpellInfo("10 法力消耗<br>+112% 穿刺伤害<br>+112% 流血伤害")
Spells[8] = new SpellInfo("10 法力消耗<br>+120% 穿刺伤害<br>+120% 流血伤害")
Spells[9] = new SpellInfo("10 法力消耗<br>+131% 穿刺伤害<br>+131% 流血伤害")
Spells[10] = new SpellInfo("10 法力消耗<br>+139% 穿刺伤害<br>+139% 流血伤害")
Spells[11] = new SpellInfo("10 法力消耗<br>+147% 穿刺伤害<br>+147% 流血伤害")
Spells[12] = new SpellInfo("10 法力消耗<br>+158% 穿刺伤害<br>+158% 流血伤害")
Spells[13] = new SpellInfo("10 法力消耗<br>+166% 穿刺伤害<br>+166% 流血伤害")
Spells[14] = new SpellInfo("10 法力消耗<br>+174% 穿刺伤害<br>+174% 流血伤害")
Skills[14] = new Skill("<font color=#00B8F5>弱点攻击</font>",24,Spells,7,"<font color=#FFF52B>利用敌人的差错和片刻的脆弱而给予其重创。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+5% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[2] = new SpellInfo("+8% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[3] = new SpellInfo("+10% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[4] = new SpellInfo("+12% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[5] = new SpellInfo("+16% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[6] = new SpellInfo("+18% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[7] = new SpellInfo("+21% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[8] = new SpellInfo("+25% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[9] = new SpellInfo("+29% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Spells[10] = new SpellInfo("+33% 移动速度<br>减少 +50 法力上限<br>100% 减少陷阱持续时间")
Skills[15] = new Skill("<font color=#00B8F5>踪迹燃烧</font>",24,Spells,4,"<font color=#FFF52B>把耐力给予那些残酷地追踪猎物的人，以致即便是最杂乱的灌木丛，也无阻猎人的追踪。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>36 ~ 58 伤害<br>72 ~ 116 火焰伤害<br>1.0 秒眩晕")
Spells[2] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>42 ~ 66 伤害<br>84 ~ 132 火焰伤害<br>1.0 秒眩晕")
Spells[3] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>49 ~ 75 伤害<br>98 ~ 150 火焰伤害<br>1.0 秒眩晕")
Spells[4] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>58 ~ 86 伤害<br>116 ~ 172 火焰伤害<br>1.0 秒眩晕")
Spells[5] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>64 ~ 94 伤害<br>128 ~ 188 火焰伤害<br>1.0 秒眩晕")
Spells[6] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>70 ~ 102 伤害<br>140 ~ 204 火焰伤害<br>1.0 秒眩晕")
Spells[7] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>77 ~ 111 伤害<br>154 ~ 222 火焰伤害<br>1.0 秒眩晕")
Spells[8] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>86 ~ 122 伤害<br>172 ~ 244 火焰伤害<br>1.0 秒眩晕")
Spells[9] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>92 ~ 130 伤害<br>184 ~ 260 火焰伤害<br>1.0 秒眩晕")
Spells[10] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>98 ~ 138 伤害<br>196 ~ 276 火焰伤害<br>1.0 秒眩晕")
Spells[11] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>105 ~ 147 伤害<br>210 ~ 294 火焰伤害<br>1.0 秒眩晕")
Spells[12] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>114 ~ 158 伤害<br>228 ~ 316 火焰伤害<br>1.0 秒眩晕")
Spells[13] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>120 ~ 166 伤害<br>240 ~ 332 火焰伤害<br>1.0 秒眩晕")
Spells[14] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>126 ~ 174 伤害<br>252 ~ 348 火焰伤害<br>1.0 秒眩晕")
Spells[15] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>133 ~ 183 伤害<br>266 ~ 366 火焰伤害<br>1.0 秒眩晕")
Spells[16] = new SpellInfo("15 法力消耗<br>1 个<br>6.0 米范围<br>142 ~ 194 伤害<br>284 ~ 388 火焰伤害<br>1.0 秒眩晕")
Skills[16] = new Skill("<font color=#00B8F5>引爆</font>",24,Spells,9,"<font color=#FFF52B>在怪物诱饵中放置炸药，并且在诱饵被破坏时爆炸。诱饵必须是满能量方会爆炸。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("10 法力消耗<br>-14% 防御能力<br>-14% 失血性伤害抗性<br>-14% 元素抗性")
Spells[2] = new SpellInfo("10 法力消耗<br>-18% 防御能力<br>-18% 失血性伤害抗性<br>-18% 元素抗性")
Spells[3] = new SpellInfo("10 法力消耗<br>-22% 防御能力<br>-22% 失血性伤害抗性<br>-22% 元素抗性")
Spells[4] = new SpellInfo("10 法力消耗<br>-26% 防御能力<br>-26% 失血性伤害抗性<br>-26% 元素抗性")
Spells[5] = new SpellInfo("10 法力消耗<br>-30% 防御能力<br>-30% 失血性伤害抗性<br>-30% 元素抗性")
Spells[6] = new SpellInfo("10 法力消耗<br>-36% 防御能力<br>-36% 失血性伤害抗性<br>-36% 元素抗性")
Spells[7] = new SpellInfo("10 法力消耗<br>-40% 防御能力<br>-40% 失血性伤害抗性<br>-40% 元素抗性")
Spells[8] = new SpellInfo("10 法力消耗<br>-44% 防御能力<br>-44% 失血性伤害抗性<br>-44% 元素抗性")
Spells[9] = new SpellInfo("10 法力消耗<br>-48% 防御能力<br>-48% 失血性伤害抗性<br>-48% 元素抗性")
Spells[10] = new SpellInfo("10 法力消耗<br>-54% 防御能力<br>-54% 失血性伤害抗性<br>-54% 元素抗性")
Skills[17] = new Skill("<font color=#00B8F5>驱散敌手</font>",32,Spells,10,"<font color=#FFF52B>把敌人驱赶至空旷的地方，使他们对攻击的防御减少。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("1 法力消耗<br>3 - 4 碎片<br>12 流血伤害在 3.0 秒内<br>3 穿刺伤害")
Spells[2] = new SpellInfo("1 法力消耗<br>3 - 5 碎片<br>19 流血伤害在 3.0 秒内<br>5 穿刺伤害")
Spells[3] = new SpellInfo("1 法力消耗<br>4 - 5 碎片<br>26 流血伤害在 3.0 秒内<br>7 穿刺伤害")
Spells[4] = new SpellInfo("1 法力消耗<br>4 - 5 碎片<br>35 流血伤害在 3.0 秒内<br>9 穿刺伤害")
Spells[5] = new SpellInfo("1 法力消耗<br>4 - 6 碎片<br>44 流血伤害在 3.0 秒内<br>11 穿刺伤害")
Spells[6] = new SpellInfo("1 法力消耗<br>5 - 6 碎片<br>54 流血伤害在 3.0 秒内<br>13 穿刺伤害")
Spells[7] = new SpellInfo("1 法力消耗<br>5 - 7 碎片<br>64 流血伤害在 3.0 秒内<br>16 穿刺伤害")
Spells[8] = new SpellInfo("1 法力消耗<br>5 - 7 碎片<br>76 流血伤害在 3.0 秒内<br>19 穿刺伤害")
Spells[9] = new SpellInfo("1 法力消耗<br>6 - 7 碎片<br>88 流血伤害在 3.0 秒内<br>22 穿刺伤害")
Spells[10] = new SpellInfo("1 法力消耗<br>6 - 8 碎片<br>101 流血伤害在 3.0 秒内<br>25 穿刺伤害")
Spells[11] = new SpellInfo("1 法力消耗<br>6 - 8 碎片<br>114 流血伤害在 3.0 秒内<br>29 穿刺伤害")
Spells[12] = new SpellInfo("1 法力消耗<br>7 - 9 碎片<br>130 流血伤害在 3.0 秒内<br>32 穿刺伤害")
Spells[13] = new SpellInfo("1 法力消耗<br>7 - 9 碎片<br>146 流血伤害在 3.0 秒内<br>36 穿刺伤害")
Spells[14] = new SpellInfo("1 法力消耗<br>7 - 9 碎片<br>163 流血伤害在 3.0 秒内<br>41 穿刺伤害")
Spells[15] = new SpellInfo("1 法力消耗<br>8 - 10 碎片<br>182 流血伤害在 3.0 秒内<br>46 穿刺伤害")
Spells[16] = new SpellInfo("1 法力消耗<br>8 - 10 碎片<br>203 流血伤害在 3.0 秒内<br>51 穿刺伤害")
Skills[18] = new Skill("<font color=#00B8F5>分散射击</font>",32,Spells,3,"<font color=#FFF52B>造箭大师的一个秘密是能锻造出在击中敌人时会破裂并向四面八方射出如剃刀般锋利的碎片的特殊箭矢。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("6% 机率被使用<br>装载 3 个")
Spells[2] = new SpellInfo("8% 机率被使用<br>装载 3 个")
Spells[3] = new SpellInfo("10% 机率被使用<br>装载 3 个")
Spells[4] = new SpellInfo("12% 机率被使用<br>装载 3 个")
Spells[5] = new SpellInfo("14% 机率被使用<br>装载 3 个")
Spells[6] = new SpellInfo("16% 机率被使用<br>装载 3 个")
Spells[7] = new SpellInfo("17% 机率被使用<br>装载 3 个")
Spells[8] = new SpellInfo("18% 机率被使用<br>装载 3 个")
Spells[9] = new SpellInfo("19% 机率被使用<br>装载 3 个")
Spells[10] = new SpellInfo("20% 机率被使用<br>装载 3 个")
Skills[19] = new Skill("<font color=#00B8F5>齐射</font>",32,Spells,-1,"<font color=#FFF52B>一种使用矛、弓或投掷武器迅速三次连击的战斗技巧。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+100 点战斗能力<br>+10% 战斗能力")
Spells[2] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+150 点战斗能力<br>+10% 战斗能力")
Spells[3] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+200 点战斗能力<br>+10% 战斗能力")
Spells[4] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+250 点战斗能力<br>+10% 战斗能力")
Spells[5] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+300 点战斗能力<br>+10% 战斗能力")
Spells[6] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+350 点战斗能力<br>+10% 战斗能力")
Spells[7] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+400 点战斗能力<br>+10% 战斗能力")
Spells[8] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+450 点战斗能力<br>+10% 战斗能力")
Spells[9] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+500 点战斗能力<br>+10% 战斗能力")
Spells[10] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+550 点战斗能力<br>+10% 战斗能力")
Spells[11] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+600 点战斗能力<br>+10% 战斗能力")
Spells[12] = new SpellInfo("2.0% 机率发动 50% 减少敌人生命值<br>+650 点战斗能力<br>+10% 战斗能力")
Skills[20] = new Skill("<font color=#00B8F5>精巧</font>",40,Spells,7,"<font color=#FFF52B>增加你队伍成员造成致命近战伤害的机率。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>60 法力消耗<br>360 攻击角度<br>-20% 物理伤害<br>8.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[2] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>63 法力消耗<br>360 攻击角度<br>-16% 物理伤害<br>12.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[3] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>66 法力消耗<br>360 攻击角度<br>-12% 物理伤害<br>16.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[4] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>69 法力消耗<br>360 攻击角度<br>-8% 物理伤害<br>20.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[5] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>72 法力消耗<br>360 攻击角度<br>-4% 物理伤害<br>24.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[6] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>75 法力消耗<br>360 攻击角度<br>+0% 物理伤害<br>28.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[7] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>78 法力消耗<br>360 攻击角度<br>+4% 物理伤害<br>32.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[8] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>81 法力消耗<br>360 攻击角度<br>+8% 物理伤害<br>36.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[9] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>84 法力消耗<br>360 攻击角度<br>+12% 物理伤害<br>40.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[10] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>87 法力消耗<br>360 攻击角度<br>+16% 物理伤害<br>44.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[11] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>90 法力消耗<br>360 攻击角度<br>+20% 物理伤害<br>48.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[12] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>93 法力消耗<br>360 攻击角度<br>+24% 物理伤害<br>52.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[13] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>96 法力消耗<br>360 攻击角度<br>+28% 物理伤害<br>56.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[14] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>99 法力消耗<br>360 攻击角度<br>+32% 物理伤害<br>60.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[15] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>102 法力消耗<br>360 攻击角度<br>+36% 物理伤害<br>64.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Spells[16] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>105 法力消耗<br>360 攻击角度<br>+40% 物理伤害<br>68.0% 机率发动 1.0 ~ 3.0 秒恐惧<br>-50% 减慢攻击 持续 2.0 秒")
Skills[21] = new Skill("<font color=#00B8F5>长矛之舞</font>",40,Spells,-1,"<font color=#FFF52B>以精湛的操矛动作与技巧使周围的敌人畏缩。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("")
Skills[22] = new Skill("",40,Spells,-1,"")
Mastery[7] = new setmastery(Skills,Attributes)