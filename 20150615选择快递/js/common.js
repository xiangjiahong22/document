(function($){
	$().ready(function(){
		var winScreen=window.screen.width;
		if(winScreen>=640){
			winScreen=320;
		}
		$('html').css('font-size',winScreen/10+'px');

		$('.freePickListCon  a').each(function(i){
	 		$('.freePickListCon  a').eq(i).find('li').css({
	 			'animation':'0.7s '+i*80+'ms'
	 		})
	 	});
	 	$('.freePickListCon  a:odd').each(function(i){
	 		$(this).find('li').css({
	 			"-webkit-animation-name": "fadeInLeft",
				"animation-name": "fadeInLeft"
	 		})
	 	});
	 	$('.freePickListCon  a:even').each(function(i){
	 		$(this).find('li').css({
	 			"-webkit-animation-name": "fadeInRight",
				"animation-name": "fadeInRight"
	 		})
	 	});



	 	/*免费提货区点击*/
	 	$('.freePickListCon a').on('click',function(){
	 		$('input.chk','.freePickListCon a').removeAttr('checked');
	 		$('input.chk',this).prop('checked',true);
	 		$('.freePickListCon a li').css('background','#fff')
	 		$('li',this).css('background','#f8f8f8')
	 	});

	 	/*省市区*/

	 	var area=new Array(34);
	 	
		area[1] = new Array("北京","东城|西城|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆","安定门街道|建国门街道|朝阳门街道|东直门街道|东华门街道|和平里街道|北新桥街道|交道口街道|景山街道|东四街道|天坛街道|东花市街道|前门街道|龙潭街道|永定门外街道|崇文门外街道|体育馆路街道","西长安街街道|新街口街道|月坛街道|展览路街道|德胜街道|金融街街道|什刹海街道|大栅栏街道|天桥街道|椿树街道|陶然亭街道|广安门内街道|牛街街道|白纸坊街道|广安门外z街道","安定门街道|建国门街道|朝阳门街道|东直门街道|东华门街道|和平里街道|北新桥街道|交道口街道|景山街道|东四街道|天坛街道|东花市街道|前门街道|龙潭街道|永定门外街道|崇文门外街道|体育馆路街道");  
		area[2] = new Array("上海","黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明","xxx|yyy|");
		area[3] = new Array("天津","和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
		area[4] = new Array("重庆","万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
		area[5] = new Array("河北省","石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
		area[6] = new Array("山西省","太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
		area[7] = new Array("内蒙古","呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
		area[8] = new Array("辽宁省","沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
		area[9] = new Array("吉林省","长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
		area[10] = new Array("黑龙江","哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
		area[11] = new Array("江苏省","南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
		area[12] = new Array("浙江省","杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
		area[13] = new Array("安徽省","合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
		area[14] = new Array("福建省","福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
		area[15] = new Array("江西省","南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
		area[16] = new Array("山东省","济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
		area[17] = new Array("河南省","郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
		area[18] = new Array("湖北省","武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
		area[19] = new Array("湖南省","长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
		area[20] = new Array("广东省","广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
		area[21] = new Array("广西省","南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
		area[22] = new Array("海南省","海口|三亚");
		area[23] = new Array("四川省","成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
		area[24] = new Array("贵州省","贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
		area[25] = new Array("云南省","昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
		area[26] = new Array("西藏","拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
		area[27] = new Array("陕西省","西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
		area[28] = new Array("甘肃省","兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
		area[29] = new Array("宁夏","银川|石嘴山|吴忠|固原");
		area[30] = new Array("青海","西宁|海东|海南|海北|黄南|玉树|果洛|海西");
		area[31] = new Array("新疆","乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
		area[32] = new Array("香港","");
		area[33] = new Array("澳门","");
		area[34] = new Array("台湾","台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");


	var areaConList="";
	for(var i=1;i<area.length;i++){
		areaConList+='<li><a href="javascript:;" class="animated fadeInUp">'+area[i][0]+'</a></li>';
		
	}
	$('.areaRight').html(areaConList);

	//console.log(area[1][0]);

	$('.areaListL li').each(function(i){
 		$('.areaListL li').eq(i).find('a').css({
 			'animation-delay':i*300+'ms '
 		})
 	});

 	$('.areaListR li').each(function(i){
 		$('.areaListR li:lt(13)').eq(i).find('a').css({
 			'animation-delay':i*100+'ms '
 		})
 	});

 	$('.areaListR li').eq(0).addClass('areaListRActive');

	for(var i=0;i<7;i++){
		$('.areaLeft').append('<li><a href="javascript:;"></a></li>');
	}

	

	//点击左侧出现对应的省
	$('.areaLeft li').eq(0).find('a').on('click',function(){
		var _thisText=$(this).text();
		var provinceStr="";
		var provinceArr="";
		var newProvinceArr="";

		if($(this).text()=='省'){  //默认情况下不作任何操作
			return false;
		}else{

			for(var i=1;i<area.length;i++){
				//alert(area[i][0]);
				provinceStr+=area[i][0]+',';  //获取到所有的省份
			}

			provinceArr=provinceStr.split(",");

			for(var j=0;j<provinceArr.length;j++){
				newProvinceArr+='<li><a href="javascript:;" class="animated fadeInUp">'+provinceArr[j]+'</a></li>';
			}
			$('.provinceList ul').html(newProvinceArr);
			$('.areaRightCon .areaBox').hide();
			$('.provinceList').show();

		/*	provinceArr=provinceStr.split(',');  //将所有的省份存入数组
			//console.log(provinceArr);

			for(var j=0;j<provinceArr.length;j++){
				if(provinceArr[j]==_thisText){  //获取到省份所在的index -> j
					
					newProvinceArr=area[j+1][1].split("|");
					for(var x=0;x<newProvinceArr.length;x++){
						console.log(newProvinceArr[x]);
						//$('.provinceList ul').html('<li><a href="javascript:;" class="animated fadeInUp">'+newProvinceArr+'</a></li>');
					}
					$('.areaRightCon .areaBox').hide();
					$('.provinceList').show();
					

				}
			}*/

			
		}

		$('.areaLeft li').removeClass('areaListLActive ');
		$(this).parent('li').addClass('areaListLActive');

	});

	//点击左侧出现对应的市
	$('.areaLeft li').eq(1).find('a').on('click',function(){
		var provinceText=$('.areaLeft li').eq(0).find('a').text();
		var _thisText=$(this).text();
		var provinceStr="";
		var newProvinceArr="";
		var newCitiesArr="";
		var newCitiesIndex=0;

		if($(this).text()=='市'){  //默认情况下不作任何操作
			return false;
		}else{

			for(var i=1;i<area.length;i++){
				//alert(area[i][0]);
				provinceStr+=area[i][0]+',';  //获取到所有的省份
			}

			provinceArr=provinceStr.split(",");

			for(var j=0;j<provinceArr.length;j++){
				if(provinceArr[j]==provinceText){  //获取到省的index
					newCitiesIndex=j;
				}
			}
			
			newCitiesArr=area[newCitiesIndex+1][1].split('|');  //获取到对应市

			for(var n=0;n<newCitiesArr.length;n++){
				newProvinceArr+='<li><a href="javascript:;" class="animated fadeInUp">'+newCitiesArr[n]+'</a></li>';
			}

			

			$('.cityList ul').html(newProvinceArr);
			$('.areaRightCon .areaBox').hide();
			$('.cityList').show();


			$('.areaLeft li').removeClass('areaListLActive ');
			$(this).parent('li').addClass('areaListLActive');

		}

	})


	
	/*$('.areaLeft li').eq(0).find('a').on('click',function(){
		var _thisText=$(this).text();
		var provinceStr="";
		var provinceArr="";
		for(var i=1;i<area.length;i++){
			//alert(area[i][0]);
			provinceStr+=area[i][0]+',';
		}

		provinceArr=provinceStr.split(',');
		
		if($(this).text()=='省'){

			
		$('.areaRightCon .areaBox').hide();
		$('.provinceList').show();
		

		}else{
			var newAreaList="";
			for(var j=0;j<provinceArr.length;j++){

				if(provinceArr[j]==_thisText){
					
					//console.log(area[j+1][1]);
					//console.log(a);
					var newInfo=area[j+1][1];
					newInfo=newInfo.split('|');
					for(var j=0;j<newInfo.length;j++){
						newAreaList+='<li><a href="javascript:;" class="animated fadeInRight">'+newInfo[j]+'</a></li>';
					}
				}
				$('.provinceList ul').html(newAreaList);
				console.log(newAreaList);

			}

		}

	})*/

	/*$('.areaLeft li').eq(0).find('a').on('click',function(){

	})*/
	
	//区域搜索--搜索框
	$('.areaSearch .inp').focus(function(e){

		$(this).parents('.wrap').fadeOut();
		$('.wrapBot').fadeIn();

		$('.wrapBot .areaSearchToggle .inp').focus();

		$('.wrapBot .areaSearchToggle .inp').on('keyup',function(){
			$('.areaSearchToggle .searchClose').css('display','inline-block')
		});

		$('.areaSearchToggle .searchClose').on('click',function(){
			$('.wrapBot .areaSearchToggle .inp').val('').focus();

		});

		 e.stopPropagation();
	});

	$('.areaSearchToggle .inp').blur(function(){
		if($(this).val()==''){
			$('.areaSearchToggle .searchClose').css('display','none')
		}
	})


	//选择省
	$('.provinceList ul').on('click','li',function(){  //省列表点击

		var _thisPindex=$(this).parents('.areaBox').index();
		var _thisText=$('a',this).text();
		var _thisIndex=$(this).index();

		/*if($('.areaLeft li').eq(1).find('a').text()!='市'){
			//省下面的市和区都清零  避免重新选择了省 未重新选择市
			$('.areaLeft li').eq(1).text('市');

			console.log("ag");
		}*/

		$('.areaLeft li').eq(_thisPindex).find('a').text(_thisText);
		$('.provinceList ul li').removeClass('areaListRActive');
		$(this).addClass('areaListRActive');


		var cities=area[_thisIndex+1][1];  //|东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆
		cities=cities.split("|");

		$(this).parents('.provinceList').fadeOut();
		
		$('.cityList').removeClass('hide').show();

		$('.areaLeft li').removeClass('areaListLActive');
		$('.areaLeft li').eq(1).addClass('areaListLActive');

		var citiesConList="";
		for(var i=1;i<cities.length;i++){
			citiesConList+='<li><a href="javascript:;" class="animated fadeInUp">'+cities[i]+'</a></li>';   //点击省份获取到区
		}

		$('.cityList ul').html(citiesConList);

		$('.cityList ul li').eq(0).addClass('areaListRActive');



		//选择市

		$('.cityList ul').on('click','li',function(){

			var _areaIndex=$(this).index();   //0 1 2 ...
			var _thisPindex=_thisIndex;
			var _thisText=$('a',this).text();


			var district=area[_thisPindex+1][_areaIndex+2];
			var district=district.split("|");

			var districtConList="";
			for(var j=0;j<district.length;j++){
				districtConList+='<li><a href="javascript:;" class="animated fadeInUp">'+district[j]+'</a></li>';
			}
			
			$('.areaListCon ul').html(districtConList);

			$('.cityList').fadeOut();
			$('.areaListCon').removeClass('hide').show();

			$('.areaListCon ul li').eq(0).addClass('areaListLActive');

			//设置左边样式
			$('.areaLeft li').removeClass('areaListLActive');
			$('.areaLeft li').eq(2).addClass('areaListLActive');
			$('.areaLeft li').eq(1).find('a').text(_thisText);

			$('.areaListCon li').on('click',function(){
				var _thisText=$('a',this).text();
				$('.areaLeft li').eq(2).find('a').text(_thisText);
			})

		})

	});

	//点击区获取到最终选择的省市区
	$('.areaRightCon .areaListCon').on('click','li',function(){
		var areaProvince=$('.areaLeft li').eq(0).find('a').text();
		var areaCities=$('.areaLeft li').eq(1).find('a').text();
		var areaDistrict=$(this).text();
		
	})



	})
})(jQuery);

















