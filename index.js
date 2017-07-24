exports.getInfo = function(objectId) {

	objectId = objectId.toString();
	if (objectId.length !== 24) throw new Error('Please Specify Valid 24 character ObjectId');

	var timestamp = objectId.slice(0, 8),
		machineId = objectId.slice(8, 14),
		processId = objectId.slice(14, 18),
		counter = objectId.slice(18, 24);

	return {
		timestamp: parseInt(timestamp, 16),
		machineId: parseInt(machineId, 16),
		processId: parseInt(processId, 16),
		counter: parseInt(counter, 16)
	};
};