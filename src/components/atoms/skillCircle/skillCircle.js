import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypesSkillCircle = {
	whSize: PropTypes.number,
	level: PropTypes.number,
	id: PropTypes.string,
}
const defaultPropsSkillCircle = {
	whSize: 150,
	level: 50,
	id: "",
}
class SkillCircle extends Component {
	componentDidMount() {
		this.drawCircles(this.props)
	}

	drawCircles (props) {
		const canvas = this.refs.canvas
		const ctx = canvas.getContext('2d')
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		//set constants
		const { level } = props,
			startAngle =  - Math.PI / 2,
			endAngle = level/100 * 2 * Math.PI + startAngle,
			middleX = canvas.width / 2,
			middleY = canvas.height / 2,
			radius = (canvas.width / 2 - canvas.width / 10)*1.15;

		// arcs settings
		const zoneLineWidth = canvas.width / 25,
			counterClockwise = false

		//every object is one arc
		const sectionOptions = [
			{
				startAngle: 0,
				endAngle: 2 * Math.PI,
				color: "#d2dae2"
			},
			{
				startAngle: startAngle,
				endAngle: endAngle,
				color: "#05c46b"
			}
		]

		//function draw one arc by option
		const drawArc = createDrawArc(ctx, middleX, middleY, radius, counterClockwise, zoneLineWidth)

		sectionOptions.forEach(function(options) {
			drawArc(options)
		})
	}

	render() {
		return (
			<canvas
				ref='canvas'
				width={this.props.whSize}
				height={this.props.whSize}
			/>
		)
	}
}

SkillCircle.propTypes = propTypesSkillCircle
SkillCircle.defaultProps = defaultPropsSkillCircle

function createDrawArc(ctx, middleX, middleY, radius, counterClockwise, zoneLineWidth) {
	return function drawArc (options) {
		ctx.beginPath()
		ctx.arc(middleX, middleY, radius, options.startAngle, options.endAngle, counterClockwise)
		ctx.lineWidth = zoneLineWidth
		ctx.strokeStyle = options.color
		ctx.lineCap = "butt"
		ctx.stroke()
	}
}

export default SkillCircle

