//console.log('this is skills module');
import Vue from "vue";

const skillsElem = {
    template: "#skills-elem",
    props: ["skillName", "skillPercent"],
    methods: {
        drawColoredCircle() {
            const circle = this.$refs["color-circle"];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
          );

          const percent = (dashArray / 100)*(100 - this.skillPercent);
          circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skillsElem
    },
    props: ['skillsElem']
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    data() {
        return {
            skills: []
        }
    },
    components: {
        skillsRow
    },
    created() {
        const data = require("../data/skills.json");
        this.skills = data;
    }
})