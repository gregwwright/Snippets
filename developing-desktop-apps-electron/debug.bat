call node_modules\.bin\node-pre-gyp --target=1.2.1 --runtime=electron --fallback-to-build --directory node_modules\v8-debug\ --dist-url=https://atom.io/download/atom-shell reinstall

call node_modules\.bin\node-pre-gyp --target=1.2.1 --runtime=electron --fallback-to-build --directory node_modules\v8-profiler\ --dist-url=https://atom.io/download/atom-shell reinstall

set ELECTRON_RUN_AS_NODE=true

call node_modules\.bin\electron node_modules\node-inspector\bin\inspector.js