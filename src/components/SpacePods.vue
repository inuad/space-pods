<template>
	<div>
		<div class="ml-2">
			<span v-html="formatter(title)"></span>
			<div class="sm-font">Created by: <a href="https://github.com/inuad/space-pods">inuad Github</a></div>
			<div class="sm-font">Inspired by <a href="https://github.com/YasiOnFire/coders-railroad">YasiOnFire Github</a></div>
			<p>
			------------------------------------------------------------<br>
			Wanna be on Pods!?, just submitting a pull request ---> <a href="https://github.com/inuad/space-pods">HERE</a><br>
			------------------------------------------------------------<br>
			<br>
			</p>
		</div>
		<div class="rocket-width">
			<span v-html="formatter(headerPod)"></span>
			<span
				v-for="(pod, index) in podData" 
				:key="index"
				v-html="podDisplay(pod)"
			></span>
			<span v-html="formatter(footerPod)"></span>
		</div>
	</div>
</template>

<script>
import config from '@/assets/config.js'
import podData from '@/assets/data.json'

export default {
	name: "SpacePods",
	data() {
		return  {
			title: config.title,
			headerPod: config.headerPod,
			podData: podData,
			footerPod: config.footerPod
		}
	},
	methods: {
		formatter(str) {
			let replaceToHTML = str.replace(/ /g, "&nbsp;").replace(/\n/g, "<br/>");
			let arrBr = [...replaceToHTML.matchAll(/<br\/>/g)];
			let lastBrIndex = arrBr[arrBr.length-1].index;
			let replaceBr = replaceToHTML.replace(/<br\/>/g, (match, offset) => {
				return (offset === lastBrIndex) ? '' : match;
			});
			
			return replaceBr;
		},
		podDisplay(pod) {
			let seperatePod = this.formatter(config.seperatePod);
			let pattern = this.selectPattern(pod.pattern);
			let podFormatter = this.formatter(pattern);

			let totalSpacer = config.totalSpacer;
			let podWord = this.checkAndConvertWord(pod.word);
			let podUsername = pod.username;
			let leftSpacer = totalSpacer - podWord.length;
			let spacer = '';
			while(leftSpacer > 0){
				spacer += "&nbsp;"
				leftSpacer--;
			}

			let matchLink = podFormatter.replace(/{link}/g, "<div style='text-align:center; display: inline-block; width: 13ch;'><a href='https://github.com/"+podUsername+"'>"+podWord+"</a></div>")
			return matchLink+seperatePod
		},
		selectPattern(pattern) {
			switch(pattern){
				case 1:
					return config.patternPod1
				case 2:
					return config.patternPod2
				case 3:
					return config.patternPod3
				default:
					return config.patternPod1
			}
		},
		checkAndConvertWord(word) {
			if(word.length > config.totalSpacer){
				let newWord = word.substr(0, 10)
				newWord += '...';
				return newWord;
			}

			return word;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ml-2 {
  margin-left: (20 * .5px) !important;
}

.sm-font{
	font-size: 16px;
}

.rocket-width{
	margin: auto;
	width: 300px;
}
</style>
