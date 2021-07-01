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
this.masteryid = 6
this.masteryname = "盗贼专精"
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
Spells[1] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+45% 物理伤害<br>35 穿刺伤害")
Spells[2] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+60% 物理伤害<br>45 穿刺伤害")
Spells[3] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+75% 物理伤害<br>53 穿刺伤害")
Spells[4] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+93% 物理伤害<br>64 穿刺伤害")
Spells[5] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+108% 物理伤害<br>72 穿刺伤害")
Spells[6] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+123% 物理伤害<br>83 穿刺伤害")
Spells[7] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+138% 物理伤害<br>91 穿刺伤害")
Spells[8] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+156% 物理伤害<br>103 穿刺伤害")
Spells[9] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+171% 物理伤害<br>111 穿刺伤害")
Spells[10] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+186% 物理伤害<br>124 穿刺伤害")
Spells[11] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+203% 物理伤害<br>138 穿刺伤害")
Spells[12] = new SpellInfo("100.0% 机率穿透敌人<br>3 蓄能等级<br>+221% 物理伤害<br>159 穿刺伤害")
Skills[0] = new Skill("<font color=#00B8F5>预谋打击</font>",1,Spells,-1,"<font color=#FFF52B>代替你的普通攻击，每第四次预谋打击将释放额外伤害。可将此技能应用于鼠标左键。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("16.0 米范围<br>+16% 穿刺<br>3 穿刺伤害<br>减少 +50 法力上限")
Spells[2] = new SpellInfo("16.0 米范围<br>+24% 穿刺<br>5 穿刺伤害<br>减少 +50 法力上限")
Spells[3] = new SpellInfo("16.0 米范围<br>+32% 穿刺<br>7 穿刺伤害<br>减少 +50 法力上限")
Spells[4] = new SpellInfo("16.0 米范围<br>+40% 穿刺<br>9 穿刺伤害<br>减少 +50 法力上限")
Spells[5] = new SpellInfo("16.0 米范围<br>+48% 穿刺<br>12 穿刺伤害<br>减少 +50 法力上限")
Spells[6] = new SpellInfo("16.0 米范围<br>+56% 穿刺<br>15 穿刺伤害<br>减少 +50 法力上限")
Spells[7] = new SpellInfo("16.0 米范围<br>+64% 穿刺<br>18 穿刺伤害<br>减少 +50 法力上限")
Spells[8] = new SpellInfo("16.0 米范围<br>+72% 穿刺<br>21 穿刺伤害<br>减少 +50 法力上限")
Spells[9] = new SpellInfo("16.0 米范围<br>+80% 穿刺<br>25 穿刺伤害<br>减少 +50 法力上限")
Spells[10] = new SpellInfo("16.0 米范围<br>+88% 穿刺<br>31 穿刺伤害<br>减少 +50 法力上限")
Skills[1] = new Skill("<font color=#00B8F5>刀刃之芒</font>",1,Spells,-1,"<font color=#FFF52B>使用后，此技能让你和盟友所使用的任何带刃武器都能保持锋利并造成额外的穿刺伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("1 法力消耗于每秒<br>25 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[2] = new SpellInfo("1 法力消耗于每秒<br>34 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[3] = new SpellInfo("1 法力消耗于每秒<br>43 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[4] = new SpellInfo("1 法力消耗于每秒<br>53 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[5] = new SpellInfo("1 法力消耗于每秒<br>67 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[6] = new SpellInfo("1 法力消耗于每秒<br>82 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[7] = new SpellInfo("1 法力消耗于每秒<br>100 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[8] = new SpellInfo("1 法力消耗于每秒<br>119 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[9] = new SpellInfo("1 法力消耗于每秒<br>142 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[10] = new SpellInfo("1 法力消耗于每秒<br>168 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[11] = new SpellInfo("1 法力消耗于每秒<br>197 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[12] = new SpellInfo("1 法力消耗于每秒<br>230 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[13] = new SpellInfo("1 法力消耗于每秒<br>265 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[14] = new SpellInfo("1 法力消耗于每秒<br>304 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[15] = new SpellInfo("1 法力消耗于每秒<br>347 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Spells[16] = new SpellInfo("1 法力消耗于每秒<br>393 毒素伤害在 3.0 秒内<br>减少 +50 法力上限")
Skills[2] = new Skill("<font color=#00B8F5>毒素武器</font>",1,Spells,-1,"<font color=#FFF52B>使用时给你的武器涂上致命的毒药。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>6.0 秒冷却</font><br>18 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>48 流血伤害在 3.0 秒内<br>15 穿刺伤害")
Spells[2] = new SpellInfo("<font color=#33FFCC>5.6 秒冷却</font><br>19 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>63 流血伤害在 3.0 秒内<br>18 穿刺伤害")
Spells[3] = new SpellInfo("<font color=#33FFCC>5.2 秒冷却</font><br>20 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>78 流血伤害在 3.0 秒内<br>21 穿刺伤害")
Spells[4] = new SpellInfo("<font color=#33FFCC>4.8 秒冷却</font><br>21 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>90 流血伤害在 3.0 秒内<br>24 穿刺伤害")
Spells[5] = new SpellInfo("<font color=#33FFCC>4.4 秒冷却</font><br>22 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>105 流血伤害在 3.0 秒内<br>27 穿刺伤害")
Spells[6] = new SpellInfo("<font color=#33FFCC>4.0 秒冷却</font><br>23 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>120 流血伤害在 3.0 秒内<br>31 穿刺伤害")
Spells[7] = new SpellInfo("<font color=#33FFCC>3.6 秒冷却</font><br>24 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>132 流血伤害在 3.0 秒内<br>35 穿刺伤害")
Spells[8] = new SpellInfo("<font color=#33FFCC>3.2 秒冷却</font><br>25 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>147 流血伤害在 3.0 秒内<br>39 穿刺伤害")
Spells[9] = new SpellInfo("<font color=#33FFCC>2.8 秒冷却</font><br>26 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>162 流血伤害在 3.0 秒内<br>43 穿刺伤害")
Spells[10] = new SpellInfo("<font color=#33FFCC>2.4 秒冷却</font><br>27 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>174 流血伤害在 3.0 秒内<br>48 穿刺伤害")
Spells[11] = new SpellInfo("<font color=#33FFCC>2.0 秒冷却</font><br>28 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>189 流血伤害在 3.0 秒内<br>53 穿刺伤害")
Spells[12] = new SpellInfo("<font color=#33FFCC>1.6 秒冷却</font><br>29 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>204 流血伤害在 3.0 秒内<br>58 穿刺伤害")
Spells[13] = new SpellInfo("<font color=#33FFCC>1.2 秒冷却</font><br>30 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>216 流血伤害在 3.0 秒内<br>63 穿刺伤害")
Spells[14] = new SpellInfo("<font color=#33FFCC>0.8 秒冷却</font><br>31 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>231 流血伤害在 3.0 秒内<br>69 穿刺伤害")
Spells[15] = new SpellInfo("<font color=#33FFCC>0.4 秒冷却</font><br>32 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>246 流血伤害在 3.0 秒内<br>75 穿刺伤害")
Spells[16] = new SpellInfo("33 法力消耗<br>1 个<br>10.0% 机率穿透敌人<br>270 流血伤害在 3.0 秒内<br>81 穿刺伤害")
Skills[3] = new Skill("<font color=#00B8F5>投掷</font>",4,Spells,-1,"<font color=#FFF52B>对你的目标投掷可穿刺的刀刃，造成持续的出血。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+20% 伤害对 机关<br>+20% 伤害对 傀儡<br>+10% 减少来自 机关 的伤害<br>+10% 减少来自 傀儡 的伤害")
Spells[2] = new SpellInfo("+40% 伤害对 机关<br>+40% 伤害对 傀儡<br>+20% 减少来自 机关 的伤害<br>+20% 减少来自 傀儡 的伤害")
Spells[3] = new SpellInfo("+61% 伤害对 机关<br>+61% 伤害对 傀儡<br>+29% 减少来自 机关 的伤害<br>+29% 减少来自 傀儡 的伤害")
Spells[4] = new SpellInfo("+82% 伤害对 机关<br>+82% 伤害对 傀儡<br>+38% 减少来自 机关 的伤害<br>+38% 减少来自 傀儡 的伤害")
Spells[5] = new SpellInfo("+105% 伤害对 机关<br>+105% 伤害对 傀儡<br>+46% 减少来自 机关 的伤害<br>+46% 减少来自 傀儡 的伤害")
Spells[6] = new SpellInfo("+128% 伤害对 机关<br>+128% 伤害对 傀儡<br>+54% 减少来自 机关 的伤害<br>+54% 减少来自 傀儡 的伤害")
Spells[7] = new SpellInfo("+154% 伤害对 机关<br>+154% 伤害对 傀儡<br>+61% 减少来自 机关 的伤害<br>+61% 减少来自 傀儡 的伤害")
Spells[8] = new SpellInfo("+180% 伤害对 机关<br>+180% 伤害对 傀儡<br>+68% 减少来自 机关 的伤害<br>+68% 减少来自 傀儡 的伤害")
Spells[9] = new SpellInfo("+210% 伤害对 机关<br>+210% 伤害对 傀儡<br>+74% 减少来自 机关 的伤害<br>+74% 减少来自 傀儡 的伤害")
Spells[10] = new SpellInfo("+240% 伤害对 机关<br>+240% 伤害对 傀儡<br>+80% 减少来自 机关 的伤害<br>+80% 减少来自 傀儡 的伤害")
Skills[4] = new Skill("<font color=#00B8F5>解除陷阱</font>",4,Spells,-1,"<font color=#FFF52B>针对陷阱和魔法装置的专门技术，让盗贼轻易地解除它们避免伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+15% 毒素伤害<br>10% 减慢速度 持续 5.0 秒")
Spells[2] = new SpellInfo("+20% 毒素伤害<br>14% 减慢速度 持续 5.0 秒")
Spells[3] = new SpellInfo("+25% 毒素伤害<br>18% 减慢速度 持续 5.0 秒")
Spells[4] = new SpellInfo("+30% 毒素伤害<br>22% 减慢速度 持续 5.0 秒")
Spells[5] = new SpellInfo("+35% 毒素伤害<br>26% 减慢速度 持续 5.0 秒")
Spells[6] = new SpellInfo("+40% 毒素伤害<br>30% 减慢速度 持续 5.0 秒")
Spells[7] = new SpellInfo("+45% 毒素伤害<br>34% 减慢速度 持续 5.0 秒")
Spells[8] = new SpellInfo("+50% 毒素伤害<br>39% 减慢速度 持续 5.0 秒")
Spells[9] = new SpellInfo("+55% 毒素伤害<br>41% 减慢速度 持续 5.0 秒")
Spells[10] = new SpellInfo("+60% 毒素伤害<br>43% 减慢速度 持续 5.0 秒")
Spells[11] = new SpellInfo("+65% 毒素伤害<br>46% 减慢速度 持续 5.0 秒")
Spells[12] = new SpellInfo("+70% 毒素伤害<br>50% 减慢速度 持续 5.0 秒")
Skills[5] = new Skill("<font color=#00B8F5>颠茄毒液</font>",4,Spells,2,"<font color=#FFF52B>致命的茄属植物中获得的毒油可以为武器涂毒并能够减慢敌人速度。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>53 法力消耗<br>3.8 米范围<br>30% 机率发动攻击 持续 8.0 秒<br>30.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[2] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>56 法力消耗<br>4.4 米范围<br>35% 机率发动攻击 持续 8.0 秒<br>35.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[3] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>59 法力消耗<br>5.0 米范围<br>40% 机率发动攻击 持续 8.0 秒<br>40.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[4] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>62 法力消耗<br>5.6 米范围<br>45% 机率发动攻击 持续 8.0 秒<br>45.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[5] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>65 法力消耗<br>6.2 米范围<br>50% 机率发动攻击 持续 8.0 秒<br>50.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[6] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>68 法力消耗<br>6.8 米范围<br>55% 机率发动攻击 持续 8.0 秒<br>55.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[7] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>71 法力消耗<br>7.4 米范围<br>60% 机率发动攻击 持续 8.0 秒<br>60.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[8] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>74 法力消耗<br>8.0 米范围<br>65% 机率发动攻击 持续 8.0 秒<br>65.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[9] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>77 法力消耗<br>8.6 米范围<br>70% 机率发动攻击 持续 8.0 秒<br>70.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[10] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>80 法力消耗<br>9.2 米范围<br>75% 机率发动攻击 持续 8.0 秒<br>75.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[11] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>83 法力消耗<br>9.8 米范围<br>80% 机率发动攻击 持续 8.0 秒<br>80.0% 机率发动 3.0 ~ 8.0  秒混乱")
Spells[12] = new SpellInfo("<font color=#33FFCC>15.0 秒冷却</font><br>86 法力消耗<br>10.4 米范围<br>85% 机率发动攻击 持续 8.0 秒<br>85.0% 机率发动 3.0 ~ 8.0  秒混乱")
Skills[6] = new Skill("<font color=#00B8F5>致盲</font>",4,Spells,-1,"<font color=#FFF52B>一个魔术师的把戏却带有格外邪恶的用心，闪光粉致盲附近的敌人，削弱他们使用武器攻击的能力，间接迷惑他们。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("44.0% 机率发动下列之一：<br>　78 伤害<br>　+70% 穿刺伤害<br>　120 流血伤害在 3.0 秒内")
Spells[2] = new SpellInfo("44.0% 机率发动下列之一：<br>　108 伤害<br>　+99% 穿刺伤害<br>　168 流血伤害在 3.0 秒内")
Spells[3] = new SpellInfo("44.0% 机率发动下列之一：<br>　138 伤害<br>　+128% 穿刺伤害<br>　222 流血伤害在 3.0 秒内")
Spells[4] = new SpellInfo("44.0% 机率发动下列之一：<br>　168 伤害<br>　+157% 穿刺伤害<br>　282 流血伤害在 3.0 秒内")
Spells[5] = new SpellInfo("44.0% 机率发动下列之一：<br>　198 伤害<br>　+186% 穿刺伤害<br>　348 流血伤害在 3.0 秒内")
Spells[6] = new SpellInfo("44.0% 机率发动下列之一：<br>　228 伤害<br>　+215% 穿刺伤害<br>　414 流血伤害在 3.0 秒内")
Spells[7] = new SpellInfo("44.0% 机率发动下列之一：<br>　258 伤害<br>　+245% 穿刺伤害<br>　480 流血伤害在 3.0 秒内")
Spells[8] = new SpellInfo("44.0% 机率发动下列之一：<br>　288 伤害<br>　+278% 穿刺伤害<br>　558 流血伤害在 3.0 秒内")
Spells[9] = new SpellInfo("44.0% 机率发动下列之一：<br>　318 伤害<br>　+313% 穿刺伤害<br>　648 流血伤害在 3.0 秒内")
Spells[10] = new SpellInfo("44.0% 机率发动下列之一：<br>　348 伤害<br>　+351% 穿刺伤害<br>　744 流血伤害在 3.0 秒内")
Skills[7] = new Skill("<font color=#00B8F5>幸运一击</font>",10,Spells,0,"<font color=#FFF52B>罕见的好运令预谋打击刺入敌人的盔甲，造成巨大的伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("33.0% 机率发动 27 流血伤害在 3.0 秒内")
Spells[2] = new SpellInfo("33.0% 机率发动 48 流血伤害在 3.0 秒内")
Spells[3] = new SpellInfo("33.0% 机率发动 69 流血伤害在 3.0 秒内")
Spells[4] = new SpellInfo("33.0% 机率发动 93 流血伤害在 3.0 秒内")
Spells[5] = new SpellInfo("33.0% 机率发动 117 流血伤害在 3.0 秒内")
Spells[6] = new SpellInfo("33.0% 机率发动 141 流血伤害在 3.0 秒内")
Spells[7] = new SpellInfo("33.0% 机率发动 165 流血伤害在 3.0 秒内")
Spells[8] = new SpellInfo("33.0% 机率发动 192 流血伤害在 3.0 秒内")
Spells[9] = new SpellInfo("33.0% 机率发动 219 流血伤害在 3.0 秒内")
Spells[10] = new SpellInfo("33.0% 机率发动 249 流血伤害在 3.0 秒内")
Spells[11] = new SpellInfo("33.0% 机率发动 276 流血伤害在 3.0 秒内")
Spells[12] = new SpellInfo("33.0% 机率发动 309 流血伤害在 3.0 秒内")
Spells[13] = new SpellInfo("33.0% 机率发动 336 流血伤害在 3.0 秒内")
Spells[14] = new SpellInfo("33.0% 机率发动 369 流血伤害在 3.0 秒内")
Spells[15] = new SpellInfo("33.0% 机率发动 402 流血伤害在 3.0 秒内")
Spells[16] = new SpellInfo("33.0% 机率发动 441 流血伤害在 3.0 秒内")
Skills[8] = new Skill("<font color=#00B8F5>割裂</font>",10,Spells,-1,"<font color=#FFF52B>在使用锋利或尖锐武器时增加造成出血伤害的几率。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>25 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　57 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>16 ~ 30 穿刺伤害</font>")
Spells[2] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>27 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　76 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>22 ~ 38 穿刺伤害</font>")
Spells[3] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>29 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　95 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>28 ~ 48 穿刺伤害</font>")
Spells[4] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>31 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　114 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>36 ~ 58 穿刺伤害</font>")
Spells[5] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>33 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　133 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>44 ~ 72 穿刺伤害</font>")
Spells[6] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>35 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　152 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>52 ~ 82 穿刺伤害</font>")
Spells[7] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>37 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　171 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>62 ~ 94 穿刺伤害</font>")
Spells[8] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>39 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　190 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>70 ~ 106 穿刺伤害</font>")
Spells[9] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>41 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　209 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>80 ~ 118 穿刺伤害</font>")
Spells[10] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>43 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　228 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>92 ~ 134 穿刺伤害</font>")
Spells[11] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>45 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　247 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>102 ~ 148 穿刺伤害</font>")
Spells[12] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>47 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　266 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>112 ~ 162 穿刺伤害</font>")
Spells[13] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>49 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　285 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>126 ~ 176 穿刺伤害</font>")
Spells[14] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>51 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　304 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>138 ~ 190 穿刺伤害</font>")
Spells[15] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>53 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　323 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>154 ~ 210 穿刺伤害</font>")
Spells[16] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>55 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　342 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>166 ~ 226 穿刺伤害</font>")
Spells[17] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>57 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　361 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>180 ~ 242 穿刺伤害</font>")
Spells[18] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>59 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　380 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>194 ~ 260 穿刺伤害</font>")
Spells[19] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>61 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　399 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>208 ~ 280 穿刺伤害</font>")
Spells[20] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>63 法力消耗<br>1.0 米范围<br>3 召唤上限<br>螺栓陷阱 属性：<br>持续时间 30.0 秒<br>　418 生命<br><br>螺栓陷阱 能力：<font color=#33CCFF><br>陷阱设置</font><br><font color=#00A3FF>1 个<br>224 ~ 306 穿刺伤害</font>")
Skills[9] = new Skill("<font color=#00B8F5>陷阱设置</font>",10,Spells,-1,"<font color=#FFF52B>设置一个机械陷阱，对附近的敌人发射致命螺钉。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>45 法力消耗<br>3.2 米范围<br>131 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[2] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>47 法力消耗<br>3.4 米范围<br>144 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[3] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>49 法力消耗<br>3.6 米范围<br>158 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[4] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>52 法力消耗<br>3.8 米范围<br>174 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[5] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>54 法力消耗<br>4.0 米范围<br>193 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[6] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>56 法力消耗<br>4.2 米范围<br>214 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[7] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>59 法力消耗<br>4.4 米范围<br>237 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[8] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>61 法力消耗<br>4.6 米范围<br>262 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[9] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>63 法力消耗<br>4.8 米范围<br>290 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[10] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>66 法力消耗<br>5.0 米范围<br>321 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[11] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>68 法力消耗<br>5.2 米范围<br>354 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[12] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>70 法力消耗<br>5.4 米范围<br>390 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[13] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>73 法力消耗<br>5.6 米范围<br>429 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[14] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>75 法力消耗<br>5.8 米范围<br>471 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[15] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>77 法力消耗<br>6.0 米范围<br>517 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Spells[16] = new SpellInfo("<font color=#33FFCC>10.0 秒冷却</font><br>80 法力消耗<br>6.0 米范围<br>566 毒素伤害在 4.0 秒内<br>33% 减慢速度 持续 6.0 秒")
Skills[10] = new Skill("<font color=#00B8F5>毒气弹</font>",10,Spells,-1,"<font color=#FFF52B>扔出一个炸弹，碰撞后爆炸产生一片毒云，吸入的敌人将受到伤害。副作用包括：混乱、惊慌并削弱使用远程武器的瞄准能力。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>52 法力消耗<br>+225% 物理伤害<br>+225% 穿刺伤害")
Spells[2] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>53 法力消耗<br>+250% 物理伤害<br>+240% 穿刺伤害")
Spells[3] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>55 法力消耗<br>+275% 物理伤害<br>+255% 穿刺伤害")
Spells[4] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>56 法力消耗<br>+300% 物理伤害<br>+270% 穿刺伤害")
Spells[5] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>58 法力消耗<br>+325% 物理伤害<br>+285% 穿刺伤害")
Spells[6] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>59 法力消耗<br>+350% 物理伤害<br>+300% 穿刺伤害")
Spells[7] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>61 法力消耗<br>+375% 物理伤害<br>+315% 穿刺伤害")
Spells[8] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>62 法力消耗<br>+400% 物理伤害<br>+330% 穿刺伤害")
Spells[9] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>64 法力消耗<br>+425% 物理伤害<br>+345% 穿刺伤害")
Spells[10] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>65 法力消耗<br>+450% 物理伤害<br>+360% 穿刺伤害")
Spells[11] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>67 法力消耗<br>+475% 物理伤害<br>+375% 穿刺伤害")
Spells[12] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>68 法力消耗<br>+500% 物理伤害<br>+390% 穿刺伤害")
Spells[13] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>70 法力消耗<br>+525% 物理伤害<br>+405% 穿刺伤害")
Spells[14] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>71 法力消耗<br>+550% 物理伤害<br>+420% 穿刺伤害")
Spells[15] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>73 法力消耗<br>+575% 物理伤害<br>+435% 穿刺伤害")
Spells[16] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>74 法力消耗<br>+600% 物理伤害<br>+450% 穿刺伤害")
Skills[11] = new Skill("<font color=#00B8F5>致死打击</font>",16,Spells,-1,"<font color=#FFF52B>致死打击可以令普通武器攻击伤害翻倍。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>-1.0 秒冷却</font><br>-5% 法力消耗")
Spells[2] = new SpellInfo("<font color=#33FFCC>-2.0 秒冷却</font><br>-10% 法力消耗")
Spells[3] = new SpellInfo("<font color=#33FFCC>-3.0 秒冷却</font><br>-15% 法力消耗")
Spells[4] = new SpellInfo("<font color=#33FFCC>-4.0 秒冷却</font><br>-20% 法力消耗")
Spells[5] = new SpellInfo("<font color=#33FFCC>-5.0 秒冷却</font><br>-25% 法力消耗")
Spells[6] = new SpellInfo("<font color=#33FFCC>-6.0 秒冷却</font><br>-30% 法力消耗")
Spells[7] = new SpellInfo("<font color=#33FFCC>-7.0 秒冷却</font><br>-35% 法力消耗")
Spells[8] = new SpellInfo("<font color=#33FFCC>-8.0 秒冷却</font><br>-40% 法力消耗")
Spells[9] = new SpellInfo("<font color=#33FFCC>-9.0 秒冷却</font><br>-45% 法力消耗")
Spells[10] = new SpellInfo("<font color=#33FFCC>-10.0 秒冷却</font><br>-50% 法力消耗")
Spells[11] = new SpellInfo("<font color=#33FFCC>-11.0 秒冷却</font><br>-55% 法力消耗")
Spells[12] = new SpellInfo("<font color=#33FFCC>-12.0 秒冷却</font><br>-60% 法力消耗")
Skills[12] = new Skill("<font color=#00B8F5>陷阱大师</font>",16,Spells,9,"<font color=#FFF52B>装配陷阱的专门技术，减少一个陷阱设置之后制作一个新陷阱的时间。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+10% 毒素伤害 增加 +12% 的持续时间")
Spells[2] = new SpellInfo("+16% 毒素伤害 增加 +24% 的持续时间")
Spells[3] = new SpellInfo("+22% 毒素伤害 增加 +36% 的持续时间")
Spells[4] = new SpellInfo("+28% 毒素伤害 增加 +48% 的持续时间")
Spells[5] = new SpellInfo("+34% 毒素伤害 增加 +60% 的持续时间")
Spells[6] = new SpellInfo("+40% 毒素伤害 增加 +72% 的持续时间")
Spells[7] = new SpellInfo("+46% 毒素伤害 增加 +84% 的持续时间")
Spells[8] = new SpellInfo("+52% 毒素伤害 增加 +96% 的持续时间")
Spells[9] = new SpellInfo("+58% 毒素伤害 增加 +108% 的持续时间")
Spells[10] = new SpellInfo("+64% 毒素伤害 增加 +120% 的持续时间")
Spells[11] = new SpellInfo("+70% 毒素伤害 增加 +132% 的持续时间")
Spells[12] = new SpellInfo("+76% 毒素伤害 增加 +144% 的持续时间")
Spells[13] = new SpellInfo("+82% 毒素伤害 增加 +156% 的持续时间")
Spells[14] = new SpellInfo("+88% 毒素伤害 增加 +168% 的持续时间")
Spells[15] = new SpellInfo("+94% 毒素伤害 增加 +183% 的持续时间")
Spells[16] = new SpellInfo("+100% 毒素伤害 增加 +200% 的持续时间")
Skills[13] = new Skill("<font color=#00B8F5>毒素提取</font>",16,Spells,2,"<font color=#FFF52B>学会用炼金术从自然界提取毒素，增加毒伤害的力度和持续时间。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+36% 流血伤害")
Spells[2] = new SpellInfo("+48% 流血伤害")
Spells[3] = new SpellInfo("+60% 流血伤害")
Spells[4] = new SpellInfo("+72% 流血伤害")
Spells[5] = new SpellInfo("+84% 流血伤害")
Spells[6] = new SpellInfo("+96% 流血伤害")
Spells[7] = new SpellInfo("+108% 流血伤害")
Spells[8] = new SpellInfo("+120% 流血伤害")
Spells[9] = new SpellInfo("+136% 流血伤害")
Spells[10] = new SpellInfo("+154% 流血伤害")
Spells[11] = new SpellInfo("+175% 流血伤害")
Spells[12] = new SpellInfo("+199% 流血伤害")
Skills[14] = new Skill("<font color=#00B8F5>解剖学</font>",24,Spells,-1,"<font color=#FFF52B>具备对解剖学的深刻了解之后，对身体上致死部位的攻击可以增加出血伤害的几率和效果。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("1 法力消耗于每秒<br>15% 机率发动攻击 持续 3.0 秒<br>6% 机率发动 1.8 ~ 2.4 秒混乱")
Spells[2] = new SpellInfo("1 法力消耗于每秒<br>20% 机率发动攻击 持续 3.0 秒<br>8% 机率发动 1.8 ~ 2.8 秒混乱")
Spells[3] = new SpellInfo("1 法力消耗于每秒<br>25% 机率发动攻击 持续 3.0 秒<br>10% 机率发动 1.8 ~ 3.2 秒混乱")
Spells[4] = new SpellInfo("1 法力消耗于每秒<br>30% 机率发动攻击 持续 3.0 秒<br>12% 机率发动 1.8 ~ 3.5 秒混乱")
Spells[5] = new SpellInfo("1 法力消耗于每秒<br>35% 机率发动攻击 持续 3.0 秒<br>14% 机率发动 1.8 ~ 3.9 秒混乱")
Spells[6] = new SpellInfo("1 法力消耗于每秒<br>40% 机率发动攻击 持续 3.0 秒<br>16% 机率发动 1.8 ~ 4.3 秒混乱")
Spells[7] = new SpellInfo("1 法力消耗于每秒<br>45% 机率发动攻击 持续 3.0 秒<br>18% 机率发动 1.8 ~ 4.6 秒混乱")
Spells[8] = new SpellInfo("1 法力消耗于每秒<br>50% 机率发动攻击 持续 3.0 秒<br>20% 机率发动 1.8 ~ 5.0 秒混乱")
Spells[9] = new SpellInfo("1 法力消耗于每秒<br>55% 机率发动攻击 持续 3.0 秒<br>22% 机率发动 1.8 ~ 5.4 秒混乱")
Spells[10] = new SpellInfo("1 法力消耗于每秒<br>60% 机率发动攻击 持续 3.0 秒<br>24% 机率发动 1.8 ~ 5.7 秒混乱")
Spells[11] = new SpellInfo("1 法力消耗于每秒<br>65% 机率发动攻击 持续 3.0 秒<br>26% 机率发动 1.8 ~ 6.1 秒混乱")
Spells[12] = new SpellInfo("1 法力消耗于每秒<br>70% 机率发动攻击 持续 3.0 秒<br>28% 机率发动 1.8 ~ 6.5 秒混乱")
Skills[15] = new Skill("<font color=#00B8F5>曼德拉草</font>",24,Spells,2,"<font color=#FFF52B>增加使用毒药毒害敌人大脑令其陷入混乱的机会。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("5 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>73 流血伤害在 4.0 秒内<br>24 穿刺伤害")
Spells[2] = new SpellInfo("6 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>86 流血伤害在 4.0 秒内<br>32 穿刺伤害")
Spells[3] = new SpellInfo("7 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>100 流血伤害在 4.0 秒内<br>40 穿刺伤害")
Spells[4] = new SpellInfo("8 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>113 流血伤害在 4.0 秒内<br>51 穿刺伤害")
Spells[5] = new SpellInfo("9 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>126 流血伤害在 4.0 秒内<br>61 穿刺伤害")
Spells[6] = new SpellInfo("10 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>140 流血伤害在 4.0 秒内<br>71 穿刺伤害")
Spells[7] = new SpellInfo("11 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>153 流血伤害在 4.0 秒内<br>82 穿刺伤害")
Spells[8] = new SpellInfo("12 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>166 流血伤害在 4.0 秒内<br>94 穿刺伤害")
Spells[9] = new SpellInfo("13 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>180 流血伤害在 4.0 秒内<br>106 穿刺伤害")
Spells[10] = new SpellInfo("14 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>193 流血伤害在 4.0 秒内<br>119 穿刺伤害")
Spells[11] = new SpellInfo("15 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>206 流血伤害在 4.0 秒内<br>131 穿刺伤害")
Spells[12] = new SpellInfo("16 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>219 流血伤害在 4.0 秒内<br>145 穿刺伤害")
Spells[13] = new SpellInfo("17 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>233 流血伤害在 4.0 秒内<br>160 穿刺伤害")
Spells[14] = new SpellInfo("18 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>246 流血伤害在 4.0 秒内<br>175 穿刺伤害")
Spells[15] = new SpellInfo("19 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>259 流血伤害在 4.0 秒内<br>193 穿刺伤害")
Spells[16] = new SpellInfo("20 法力消耗<br>1.5 米范围<br>9 - 11 碎片<br>299 流血伤害在 4.0 秒内<br>215 穿刺伤害")
Skills[16] = new Skill("<font color=#00B8F5>碎裂弹</font>",24,Spells,10,"<font color=#FFF52B>包裹了爆炸性的液体和金属碎片，毒气弹将剧烈爆炸在区域内发生大量碰撞。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("15 法力消耗<br>+60% 流血伤害<br>+60% 毒素伤害<br>3.0 秒眩晕")
Spells[2] = new SpellInfo("15 法力消耗<br>+95% 流血伤害<br>+95% 毒素伤害<br>3.0 秒眩晕")
Spells[3] = new SpellInfo("15 法力消耗<br>+130% 流血伤害<br>+130% 毒素伤害<br>3.0 秒眩晕")
Spells[4] = new SpellInfo("15 法力消耗<br>+165% 流血伤害<br>+165% 毒素伤害<br>3.0 秒眩晕")
Spells[5] = new SpellInfo("15 法力消耗<br>+200% 流血伤害<br>+200% 毒素伤害<br>3.0 秒眩晕")
Spells[6] = new SpellInfo("15 法力消耗<br>+235% 流血伤害<br>+235% 毒素伤害<br>3.0 秒眩晕")
Spells[7] = new SpellInfo("15 法力消耗<br>+270% 流血伤害<br>+270% 毒素伤害<br>3.0 秒眩晕")
Spells[8] = new SpellInfo("15 法力消耗<br>+305% 流血伤害<br>+305% 毒素伤害<br>3.0 秒眩晕")
Spells[9] = new SpellInfo("15 法力消耗<br>+340% 流血伤害<br>+340% 毒素伤害<br>3.0 秒眩晕")
Spells[10] = new SpellInfo("15 法力消耗<br>+375% 流血伤害<br>+375% 毒素伤害<br>3.0 秒眩晕")
Spells[11] = new SpellInfo("15 法力消耗<br>+410% 流血伤害<br>+410% 毒素伤害<br>3.0 秒眩晕")
Spells[12] = new SpellInfo("15 法力消耗<br>+445% 流血伤害<br>+445% 毒素伤害<br>3.0 秒眩晕")
Skills[17] = new Skill("<font color=#00B8F5>致命创伤</font>",32,Spells,11,"<font color=#FFF52B>晕眩致命一击的牺牲品，并惊人地扩大攻击造成的毒和出血伤害的效果。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("15 法力消耗<br>1 个<br>+26% 穿刺伤害")
Spells[2] = new SpellInfo("18 法力消耗<br>2 个<br>+30% 穿刺伤害")
Spells[3] = new SpellInfo("18 法力消耗<br>2 个<br>+35% 穿刺伤害")
Spells[4] = new SpellInfo("21 法力消耗<br>3 个<br>+39% 穿刺伤害")
Spells[5] = new SpellInfo("21 法力消耗<br>3 个<br>+44% 穿刺伤害")
Spells[6] = new SpellInfo("24 法力消耗<br>4 个<br>+48% 穿刺伤害")
Spells[7] = new SpellInfo("24 法力消耗<br>5 个<br>+53% 穿刺伤害")
Spells[8] = new SpellInfo("27 法力消耗<br>6 个<br>+57% 穿刺伤害")
Spells[9] = new SpellInfo("27 法力消耗<br>7 个<br>+62% 穿刺伤害")
Spells[10] = new SpellInfo("30 法力消耗<br>8 个<br>+66% 穿刺伤害")
Skills[18] = new Skill("<font color=#00B8F5>刀阵</font>",32,Spells,3,"<font color=#FFF52B>学会同时投掷更多的武器，用致死的锋锐金属风暴砍倒敌人。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("3 个<br>10.0% 机率穿透敌人<br>+15% 穿刺伤害")
Spells[2] = new SpellInfo("4 个<br>15.0% 机率穿透敌人<br>+20% 穿刺伤害")
Spells[3] = new SpellInfo("4 个<br>20.0% 机率穿透敌人<br>+25% 穿刺伤害")
Spells[4] = new SpellInfo("5 个<br>25.0% 机率穿透敌人<br>+30% 穿刺伤害")
Spells[5] = new SpellInfo("5 个<br>30.0% 机率穿透敌人<br>+35% 穿刺伤害")
Spells[6] = new SpellInfo("6 个<br>35.0% 机率穿透敌人<br>+40% 穿刺伤害")
Spells[7] = new SpellInfo("6 个<br>40.0% 机率穿透敌人<br>+45% 穿刺伤害")
Spells[8] = new SpellInfo("6 个<br>45.0% 机率穿透敌人<br>+50% 穿刺伤害")
Spells[9] = new SpellInfo("7 个<br>50.0% 机率穿透敌人<br>+55% 穿刺伤害")
Spells[10] = new SpellInfo("7 个<br>55.0% 机率穿透敌人<br>+60% 穿刺伤害")
Spells[11] = new SpellInfo("7 个<br>60.0% 机率穿透敌人<br>+65% 穿刺伤害")
Spells[12] = new SpellInfo("8 个<br>65.0% 机率穿透敌人<br>+75% 穿刺伤害")
Skills[19] = new Skill("<font color=#00B8F5>陷阱强化</font>",32,Spells,9,"<font color=#FFF52B>强化机械陷阱攻击，增加每次发射螺钉的数量。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>100 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>10 流血伤害 每秒<br>20 穿刺伤害<br>0% 减少敌人生命值")
Spells[2] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>105 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>15 流血伤害 每秒<br>30 穿刺伤害<br>1% 减少敌人生命值")
Spells[3] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>110 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>20 流血伤害 每秒<br>40 穿刺伤害<br>1% 减少敌人生命值")
Spells[4] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>115 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>25 流血伤害 每秒<br>50 穿刺伤害<br>2% 减少敌人生命值")
Spells[5] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>120 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>30 流血伤害 每秒<br>60 穿刺伤害<br>2% 减少敌人生命值")
Spells[6] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>125 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>35 流血伤害 每秒<br>70 穿刺伤害<br>2% 减少敌人生命值")
Spells[7] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>130 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>40 流血伤害 每秒<br>80 穿刺伤害<br>3% 减少敌人生命值")
Spells[8] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>135 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>45 流血伤害 每秒<br>90 穿刺伤害<br>3% 减少敌人生命值")
Spells[9] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>140 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>50 流血伤害 每秒<br>100 穿刺伤害<br>4% 减少敌人生命值")
Spells[10] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>145 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>55 流血伤害 每秒<br>110 穿刺伤害<br>4% 减少敌人生命值")
Spells[11] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>150 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>60 流血伤害 每秒<br>120 穿刺伤害<br>4% 减少敌人生命值")
Spells[12] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>155 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>65 流血伤害 每秒<br>130 穿刺伤害<br>5% 减少敌人生命值")
Spells[13] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>160 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>70 流血伤害 每秒<br>140 穿刺伤害<br>5% 减少敌人生命值")
Spells[14] = new SpellInfo("<font color=#33FFCC>30.0 秒冷却</font><br>165 法力消耗<br>10.0 秒持续时间<br>2.5 米范围<br>75 流血伤害 每秒<br>150 穿刺伤害<br>6% 减少敌人生命值")
Skills[20] = new Skill("<font color=#00B8F5>刀刃屏障</font>",40,Spells,-1,"<font color=#FFF52B>召唤出一道回旋刃场，可像普通挥动武器一样攻击敌人。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("1 个")
Spells[2] = new SpellInfo("1 个<br>5% 机率降低准确率 持续 4.0 秒<br>10.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[3] = new SpellInfo("1 个<br>10% 机率降低准确率 持续 4.0 秒<br>20.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[4] = new SpellInfo("2 个<br>10% 机率降低准确率 持续 4.0 秒<br>20.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[5] = new SpellInfo("2 个<br>15% 机率降低准确率 持续 4.0 秒<br>30.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[6] = new SpellInfo("2 个<br>20% 机率降低准确率 持续 4.0 秒<br>40.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[7] = new SpellInfo("3 个<br>20% 机率降低准确率 持续 4.0 秒<br>40.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[8] = new SpellInfo("3 个<br>25% 机率降低准确率 持续 4.0 秒<br>50.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[9] = new SpellInfo("3 个<br>30% 机率降低准确率 持续 4.0 秒<br>60.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[10] = new SpellInfo("4 个<br>30% 机率降低准确率 持续 4.0 秒<br>60.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[11] = new SpellInfo("4 个<br>35% 机率降低准确率 持续 4.0 秒<br>70.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Spells[12] = new SpellInfo("4 个<br>40% 机率降低准确率 持续 4.0 秒<br>80.0% 机率发动 1.0 ~ 2.0 秒恐惧")
Skills[21] = new Skill("<font color=#00B8F5>剧毒之乱</font>",40,Spells,10,"<font color=#FFF52B>一次投掷多个毒气弹。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("")
Skills[22] = new Skill("",40,Spells,-1,"")
Mastery[6] = new setmastery(Skills,Attributes)