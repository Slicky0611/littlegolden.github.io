(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{237:function(t,a,s){"use strict";s.r(a);var r=s(0),R=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"了解机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解机制"}},[t._v("#")]),t._v(" 了解机制")]),t._v(" "),s("h2",{attrs:{id:"csur-的核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csur-的核心概念"}},[t._v("#")]),t._v(" CSUR 的核心概念")]),t._v(" "),s("h4",{attrs:{id:"原版游戏：按路修建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原版游戏：按路修建"}},[t._v("#")]),t._v(" 原版游戏：按路修建")]),t._v(" "),s("p",[t._v("在都市天际线原版游戏里，城市路网的修建是以“路”为单位的。这意味着你在建造城市时使用的每个道路组件都代表“一整条路”。我们来看下面的简单例子。在下图中，一条4车道的高速路分叉为两条2车道的高速路。由于原版的道路组件以路为单位，这个匝道的左分叉和右分叉都是2车道高速路，所以这两个分叉接出的路完全相同。也就是说，原版游戏对于一个匝道是无法区分左分叉和右分叉的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/09/23/mqGi2fxdXMKYZEp.jpg",alt:"fig1"}})]),t._v(" "),s("p",[t._v("都市天际线原版游戏按路修建的体系因此也带来了一些明显的问题，使得修建非常逼真的道路设施需要花费大量的额外人工。游戏无法区分一个匝道的左右叉，这意味着游戏也不能自动作出匝道分叉所对应的道路标线。比如4车道分出1车道可以有左出口和右出口两组，然而游戏无法分辨是左出口还是右出口，自然也不能画出标线。另外一个例子是同一条路上车道数量的增减。现实世界中，一条3车道的路拓宽到4车道，往往会从最左边或者最右边增加一个车道，同时3车道的路和4车道的路对应地根据右侧或者左侧对齐。而在原版游戏里，如果直接连接一条3车道和4车道的路，这两条路是居中对齐的。所以在原版的道路系统下，我们往往需要仔细地用 Move it 调整道路分支的位置和对齐，再手动画上每个接口的标线，才能得到非常真实的效果。这也是大部分都市天际线的造景玩家修路的主要方法。")]),t._v(" "),s("h4",{attrs:{id:"csur：按道修建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csur：按道修建"}},[t._v("#")]),t._v(" CSUR：按道修建")]),t._v(" "),s("p",[t._v("和原版游戏的道路体系（包括工坊上的绝大部分道路资产）相比，CSUR采用一种完全不同的修路理念：按道修建。这意味着CSUR中每个道路组件代表的不是一整条路，而是一条路中的一组或者多组行车道。我们来看和原版高速相对应的例子。在下图中，一条CSUR的4车道高架路分为两条2车道的道路。由于CSUR的道路组件以车道为单位，由第1--4道组成的4车道道路会分叉成位于1--2车道的左分支和位于3(.5)--4(.5)车道(半个车道的宽度用于容纳道路护栏)的右分支。左右分支的两组车道位置不同，它们也就对应于两个不同的CSUR组件(2R和2R4P)。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2019/09/23/Zc82eyiTzAq7Eo9.jpg",alt:"fig1"}})]),t._v(" "),s("p",[t._v("因此，CSUR的每个接口组件确定了每条车道发生什么变化（如增减、分叉等），自然也就能预先画好标线，同时一步到位修出完美平滑的道路接口。和原版道路体系相比，CSUR无疑需要花一些时间来学习，然而对于追求精细景观的玩家来说，使用CSUR能够省去大量手动摆放标线的时间，同时也使得存到更难达到游戏的prop上限。")]),t._v(" "),s("h2",{attrs:{id:"csur-模块和命名概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csur-模块和命名概要"}},[t._v("#")]),t._v(" CSUR 模块和命名概要")]),t._v(" "),s("p",[t._v("由于上文提到的按道修建的概念，CSUR包含数量极其庞大的道路组件。比如在宽度不超过6车道的情况下1车道的组件就可以有6种。再加上各种可能出现的接口模块，我们在工坊发布的CSUR道路合集的资产总数多达近400个。为了迅速生产大量的道路模块，我们开发了一套基于Blender的道路建模软件，以及在游戏资产编辑器使用的道路自动导入MOD。如果你发现工坊发布的道路包里没有你所需要的模块，或者你想自己定制一套CSUR道路包，你只需下载CSUR建模软件和道路导入MOD，不需要任何3D建模或资产制作的技能，就可以在几分钟之内制作你所需要的定制道路。")]),t._v(" "),s("p",[t._v("CSUR的组件命名是高度规律的， 组件的名称可以唯一确定它所对应的道路连接方式，。这也使得根据需求搜索要用的CSUR模块变得十分简单。我们从CSUR对每条车道的位置编号开始，逐步介绍各种模块的命名方式。")]),t._v(" "),s("h4",{attrs:{id:"车道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#车道"}},[t._v("#")]),t._v(" 车道")]),t._v(" "),s("p",[t._v("CSUR对车道标号的规律非常简单。从道路中心线开始，正好沿中心线居中对齐的车道为第0道，类比坐标系中的原点。紧贴着第0道右侧的车道就是第1道，再右侧就是第2道，依此类推。\n"),s("img",{attrs:{src:"https://i.loli.net/2019/09/23/mwdjRVPKrDnsZzi.png",alt:"fig1"}})]),t._v(" "),s("p",[t._v('同时我们也会使用编号带有0.5的车道。比如左边缘贴着道路中心线的一条车道，相对第0道向右偏移了半条车道，所以就是+0.5道。带有小数点的名称容易造成程序混淆，CSUR中".5"用P来表示，即挨着中心线右边的车道是0P，向右为1P, 2P, 依此类推。\n'),s("img",{attrs:{src:"https://i.loli.net/2019/09/23/Ksjow7xtdMLrIlU.png",alt:"fig1"}})]),t._v(" "),s("h4",{attrs:{id:"车道组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#车道组"}},[t._v("#")]),t._v(" 车道组")]),t._v(" "),s("p",[t._v("一条或多条连续位置的车道并排在一起，就形成了一组车道(block)，或者叫一条行车线 (carriageway)。每组车道根据它的位置 (左，中，右) 和车道数量命名。比如4条车道构成一组，如果这4条车道相对道路中心线居中 (即-1.5, -0.5, 0.5, 1.5), 则称为4C。如果相对中心线向右偏移，那么用最右边的车道编号来命名这一组车道，若最右道是第5道则为4R5。反之，如果相对中心线向左偏移，就以最左边的车道标号，如4L5。目前的CSUR模块都是靠右行驶的，所以暂时没有左偏移的组件。根据这个规律，我们很容易就能从每组车道的编号知道它的位置。比如3R4就是3条车道向右至第4道。特别地，如果一组车道从第1条车道开始，它的编号就会省略R(L)之后的数字，比如2R2简写为2R，3R3简写为3R。\n"),s("img",{attrs:{src:"https://i.loli.net/2019/09/23/1LnyGpW29fj6ASs.jpg",alt:"fig1"}})]),t._v(" "),s("h4",{attrs:{id:"模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),s("p",[t._v("一个CSUR模块由沿着行车方向首尾两端连接的车道组构成。CSUR的道路模块分为4种：")]),t._v(" "),s("ol",[s("li",[t._v("基本 (base) 模块：两端为完全相同的一组或多组车道。如 4R，6DR4。")]),t._v(" "),s("li",[t._v("平移 (shift) 模块：改变一组车道在路中的相对位置，即向左或者向右移动。如3R=3R4。")]),t._v(" "),s("li",[t._v("过渡 (transition) 模块：增加或减少一组车道中的车道数。如3R=4R。")]),t._v(" "),s("li",[t._v("匝道 (ramp) 模块：多组车道在首尾之间分流或合流。如4R=2R2R4P，3R3R6P=2R2R4P2R7")])]),t._v(" "),s("p",[t._v("后三种模块也统称接口 (interface) 模块。CSUR的模块逻辑能保证任意连接首尾的车道组，得到的模块总属于这4种之一。模块的命名方式为  (首端车道组)=(尾端车道组)。由于基本模块首尾一样，省略等号和之后的部分。根据模块的命名，我们也很容易知道它连接的是哪些车道。比如3R3R6P=2R2R4P2R7是一个两组车道 3R 和 3R6P 分成三组车道 2R、2R4P 和 2R7 的匝道模块。")]),t._v(" "),s("p",[t._v("上文描述了单向模块的命名。双向模块的命名分对称和不对称两种情况。如果直接把一个模块双向对称处理，它的名称就是原来单向模块的车道数后加上 “D”，并把车道数乘以2。比如两条 3R 成为 6DR，两条5R6成为10DR6。如果模块恰好挨着道路中心线 (如1R0P，2R1P) ，对应的双向道路就不会有中央分隔带，相当于在居中的一组车道中间画了一条双黄线。比如2R1P对应的双向模块相当于画了黄线的4C，因此称为4DC。如果双向模块不对称，那么直接用 (左侧模块)--(右侧模块) 命名，如 3R4--4R, 2R3--4R3。")]),t._v(" "),s("h2",{attrs:{id:"使用-csur-道路资产"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-csur-道路资产"}},[t._v("#")]),t._v(" 使用 CSUR 道路资产")]),t._v(" "),s("p",[t._v("每个 CSUR 资产的缩略图和文字描述里都指出了它的功能。同一个模块可能存在多个资产，分别对应不同的样式和使用场景 (如有无自行车道)。")])])}),[],!1,null,null,null);a.default=R.exports}}]);