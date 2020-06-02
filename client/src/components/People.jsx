let par = document.getElementById('people-links');
let meta = document.getElementById('actor-links');

if (props.currentPic.subjects === 3) {
  par.innerHTML += "<a href={this.props.currentPic.links[0]}>{this.props.currentPic.people[0]}</a>,&nbsp;<a href={this.props.currentPic.links[1]}>{this.props.currentPic.people[1]}</a>,&nbsp;and&nbsp;<a href={this.props.currentPic.links[2]}>{this.props.currentPic.people[2]}</a>";
  meta.innerHTML += "<a href={this.props.currentPic.links[0]}>{this.props.currentPic.people[0]}</a>,&nbsp;<a href={this.props.currentPic.links[1]}>{this.props.currentPic.people[1]}</a>,&nbsp;<a href={this.props.currentPic.links[2]}>{this.props.currentPic.people[2]}</a>"
} else if (props.currentPic.subjects === 2) {
  par.innerHTML += "<a href={this.props.currentPic.links[0]}>{this.props.currentPic.people[0]}</a>&nbsp;and&nbsp;<a href={this.props.currentPic.links[1]}>{this.props.currentPic.people[1]}</a>";
  meta.innerHTML += "<a href={this.props.currentPic.links[0]}>{this.props.currentPic.people[0]}</a>,&nbsp;<a href={this.props.currentPic.links[1]}>{this.props.currentPic.people[1]}</a>"
} else {
  par.innerHTML += "<a href={this.props.currentPic.links}>{this.props.currentPic.people}</a>";
  meta.innerHTML += "<a href={this.props.currentPic.links}>{this.props.currentPic.people}</a>"
}