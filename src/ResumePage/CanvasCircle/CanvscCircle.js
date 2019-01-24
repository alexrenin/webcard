import React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types';

export default class CanvscCircle extends Component {
	constructor ({whSize=100, level=50, id=""}) {
		super()
		this.state = {whSize, level, id};
	}

	componentDidMount() {
		this.drawZones(this.state)
	}

	drawZones (props) {
		const {whSize, level} = props
		const canvas = this.refs.canvas
		const ctx = canvas.getContext('2d')
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		const 	startAngle =  - Math.PI / 2,
				endAngle = level/100 * 2 * Math.PI + startAngle,
				middleX = canvas.width / 2,
				middleY = canvas.height / 2,
				radius = (canvas.width / 2 - canvas.width / 10)*1.15;

		// zones settings
		const zoneLineWidth = canvas.width / 25,
			  counterClockwise = false;

		var sectionOptions = [
			{
				startAngle: startAngle,
				endAngle: endAngle,
				color: "#090"
			}
		];

		let DrawZone = function(options) {
			ctx.beginPath();
			ctx.arc(middleX, middleY, radius, options.startAngle, options.endAngle, counterClockwise);
			ctx.lineWidth = zoneLineWidth;
			ctx.strokeStyle = options.color;
			ctx.lineCap = "butt";
			ctx.stroke();
		};

		sectionOptions.forEach(function(options) {
			DrawZone(options);
		});
	};

	render() {
		return <canvas ref='canvas' width={this.state.whSize} height={this.state.whSize} />
	}
}

CanvscCircle.propTypes = {
	whSize: PropTypes.number,
	level: PropTypes.number,
	id: PropTypes.string,
}