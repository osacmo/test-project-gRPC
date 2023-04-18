PROTO_DIR=./proto

# generate js codes via grpc-tools
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./${PROTO_DIR} \
--grpc_out=grpc_js:./${PROTO_DIR} \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
-I ./proto \
proto/*.proto

# generate d.ts codes
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./${PROTO_DIR} \
-I ./proto \
proto/*.proto