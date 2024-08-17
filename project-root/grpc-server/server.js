const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('your_service.proto', {});
const yourPackage = grpc.loadPackageDefinition(packageDefinition).yourpackage;

const server = new grpc.Server();

server.addService(yourPackage.YourService.service, {
	YourMethod: (call, callback) => {
		const response = { message: `Hello, ${call.request.name}!` };
		callback(null, response);
	}
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
	console.log('gRPC server running at http://0.0.0.0:50051');
	server.start();
});
