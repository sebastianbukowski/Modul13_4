function timeConverter (timeInSeconds) {
    var hours = Math.floor(timeInSeconds/3600);
    var minutes = Math.floor((timeInSeconds - hours*3600)/60);
    var seconds = timeInSeconds - (hours*3600) - (minutes*60);
    return  hours + 'h '+ minutes + 'min '+ seconds + 's'
}

exports.convert = timeConverter;