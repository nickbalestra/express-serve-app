System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "index.js",
      "app.js",
      "npm:react@15.3.1.js",
      "npm:react@15.3.1/react.js",
      "npm:react@15.3.1/lib/React.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.8.js",
      "npm:process@0.11.8/browser.js",
      "npm:react@15.3.1/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.4/lib/warning.js",
      "npm:fbjs@0.8.4/lib/emptyFunction.js",
      "npm:react@15.3.1/lib/getIteratorFn.js",
      "npm:react@15.3.1/lib/canDefineProperty.js",
      "npm:react@15.3.1/lib/checkReactTypeSpec.js",
      "npm:react@15.3.1/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.4/lib/invariant.js",
      "npm:react@15.3.1/lib/ReactCurrentOwner.js",
      "npm:react@15.3.1/lib/reactProdInvariant.js",
      "npm:react@15.3.1/lib/ReactPropTypesSecret.js",
      "npm:react@15.3.1/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.3.1/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.4/lib/keyMirror.js",
      "npm:react@15.3.1/lib/ReactElement.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.3.1/lib/onlyChild.js",
      "npm:react@15.3.1/lib/ReactVersion.js",
      "npm:react@15.3.1/lib/ReactPropTypes.js",
      "npm:react@15.3.1/lib/ReactDOMFactories.js",
      "npm:react@15.3.1/lib/ReactClass.js",
      "npm:fbjs@0.8.4/lib/keyOf.js",
      "npm:fbjs@0.8.4/lib/emptyObject.js",
      "npm:react@15.3.1/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactComponent.js",
      "npm:react@15.3.1/lib/ReactPureComponent.js",
      "npm:react@15.3.1/lib/ReactChildren.js",
      "npm:react@15.3.1/lib/traverseAllChildren.js",
      "npm:react@15.3.1/lib/KeyEscapeUtils.js",
      "npm:react@15.3.1/lib/PooledClass.js",
      "npm:react-dom@15.3.1.js",
      "npm:react-dom@15.3.1/index.js",
      "npm:react@15.3.1/lib/ReactDOM.js",
      "npm:react@15.3.1/lib/ReactDOMNullInputValuePropHook.js",
      "npm:react@15.3.1/lib/ReactDOMUnknownPropertyHook.js",
      "npm:react@15.3.1/lib/EventPluginRegistry.js",
      "npm:react@15.3.1/lib/DOMProperty.js",
      "npm:react@15.3.1/lib/ReactInstrumentation.js",
      "npm:react@15.3.1/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.4/lib/performanceNow.js",
      "npm:fbjs@0.8.4/lib/performance.js",
      "npm:fbjs@0.8.4/lib/ExecutionEnvironment.js",
      "npm:react@15.3.1/lib/ReactChildrenMutationWarningHook.js",
      "npm:react@15.3.1/lib/ReactHostOperationHistoryHook.js",
      "npm:react@15.3.1/lib/ReactInvalidSetStateWarningHook.js",
      "npm:react@15.3.1/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.3.1/lib/ReactMount.js",
      "npm:react@15.3.1/lib/shouldUpdateReactComponent.js",
      "npm:react@15.3.1/lib/setInnerHTML.js",
      "npm:react@15.3.1/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.3.1/lib/DOMNamespaces.js",
      "npm:react@15.3.1/lib/instantiateReactComponent.js",
      "npm:react@15.3.1/lib/ReactHostComponent.js",
      "npm:react@15.3.1/lib/ReactEmptyComponent.js",
      "npm:react@15.3.1/lib/ReactCompositeComponent.js",
      "npm:fbjs@0.8.4/lib/shallowEqual.js",
      "npm:react@15.3.1/lib/ReactReconciler.js",
      "npm:react@15.3.1/lib/ReactRef.js",
      "npm:react@15.3.1/lib/ReactOwner.js",
      "npm:react@15.3.1/lib/ReactNodeTypes.js",
      "npm:react@15.3.1/lib/ReactInstanceMap.js",
      "npm:react@15.3.1/lib/ReactErrorUtils.js",
      "npm:react@15.3.1/lib/ReactComponentEnvironment.js",
      "npm:react@15.3.1/lib/ReactUpdates.js",
      "npm:react@15.3.1/lib/Transaction.js",
      "npm:react@15.3.1/lib/ReactFeatureFlags.js",
      "npm:react@15.3.1/lib/CallbackQueue.js",
      "npm:react@15.3.1/lib/ReactUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactMarkupChecksum.js",
      "npm:react@15.3.1/lib/adler32.js",
      "npm:react@15.3.1/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.3.1/lib/ReactDOMContainerInfo.js",
      "npm:react@15.3.1/lib/validateDOMNesting.js",
      "npm:react@15.3.1/lib/ReactDOMComponentTree.js",
      "npm:react@15.3.1/lib/ReactDOMComponentFlags.js",
      "npm:react@15.3.1/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.3.1/lib/isEventSupported.js",
      "npm:react@15.3.1/lib/getVendorPrefixedEventName.js",
      "npm:react@15.3.1/lib/ViewportMetrics.js",
      "npm:react@15.3.1/lib/ReactEventEmitterMixin.js",
      "npm:react@15.3.1/lib/EventPluginHub.js",
      "npm:react@15.3.1/lib/forEachAccumulated.js",
      "npm:react@15.3.1/lib/accumulateInto.js",
      "npm:react@15.3.1/lib/EventPluginUtils.js",
      "npm:react@15.3.1/lib/EventConstants.js",
      "npm:react@15.3.1/lib/DOMLazyTree.js",
      "npm:react@15.3.1/lib/setTextContent.js",
      "npm:react@15.3.1/lib/escapeTextContentForBrowser.js",
      "npm:react@15.3.1/lib/getHostComponentFromComposite.js",
      "npm:react@15.3.1/lib/findDOMNode.js",
      "npm:react@15.3.1/lib/ReactDefaultInjection.js",
      "npm:react@15.3.1/lib/SimpleEventPlugin.js",
      "npm:react@15.3.1/lib/getEventCharCode.js",
      "npm:react@15.3.1/lib/SyntheticWheelEvent.js",
      "npm:react@15.3.1/lib/SyntheticMouseEvent.js",
      "npm:react@15.3.1/lib/getEventModifierState.js",
      "npm:react@15.3.1/lib/SyntheticUIEvent.js",
      "npm:react@15.3.1/lib/getEventTarget.js",
      "npm:react@15.3.1/lib/SyntheticEvent.js",
      "npm:react@15.3.1/lib/SyntheticTransitionEvent.js",
      "npm:react@15.3.1/lib/SyntheticTouchEvent.js",
      "npm:react@15.3.1/lib/SyntheticDragEvent.js",
      "npm:react@15.3.1/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.3.1/lib/getEventKey.js",
      "npm:react@15.3.1/lib/SyntheticFocusEvent.js",
      "npm:react@15.3.1/lib/SyntheticClipboardEvent.js",
      "npm:react@15.3.1/lib/SyntheticAnimationEvent.js",
      "npm:react@15.3.1/lib/EventPropagators.js",
      "npm:fbjs@0.8.4/lib/EventListener.js",
      "npm:react@15.3.1/lib/SelectEventPlugin.js",
      "npm:react@15.3.1/lib/isTextInputElement.js",
      "npm:fbjs@0.8.4/lib/getActiveElement.js",
      "npm:react@15.3.1/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.4/lib/focusNode.js",
      "npm:fbjs@0.8.4/lib/containsNode.js",
      "npm:fbjs@0.8.4/lib/isTextNode.js",
      "npm:fbjs@0.8.4/lib/isNode.js",
      "npm:react@15.3.1/lib/ReactDOMSelection.js",
      "npm:react@15.3.1/lib/getTextContentAccessor.js",
      "npm:react@15.3.1/lib/getNodeForCharacterOffset.js",
      "npm:react@15.3.1/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.3.1/lib/ReactReconcileTransaction.js",
      "npm:react@15.3.1/lib/ReactInjection.js",
      "npm:react@15.3.1/lib/ReactEventListener.js",
      "npm:fbjs@0.8.4/lib/getUnboundedScrollPosition.js",
      "npm:react@15.3.1/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.3.1/lib/ReactDOMTextComponent.js",
      "npm:react@15.3.1/lib/DOMChildrenOperations.js",
      "npm:react@15.3.1/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.3.1/lib/Danger.js",
      "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.4/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.4/lib/createArrayFromMixed.js",
      "npm:react@15.3.1/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.3.1/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.3.1/lib/ReactDOMComponent.js",
      "npm:react@15.3.1/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.3.1/lib/ReactServerUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactMultiChild.js",
      "npm:react@15.3.1/lib/flattenChildren.js",
      "npm:react@15.3.1/lib/ReactChildReconciler.js",
      "npm:react@15.3.1/lib/ReactDOMTextarea.js",
      "npm:react@15.3.1/lib/LinkedValueUtils.js",
      "npm:react@15.3.1/lib/DisabledInputUtils.js",
      "npm:react@15.3.1/lib/ReactDOMSelect.js",
      "npm:react@15.3.1/lib/ReactDOMOption.js",
      "npm:react@15.3.1/lib/ReactDOMInput.js",
      "npm:react@15.3.1/lib/DOMPropertyOperations.js",
      "npm:react@15.3.1/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.3.1/lib/ReactDOMButton.js",
      "npm:react@15.3.1/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.4/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.4/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.4/lib/hyphenate.js",
      "npm:react@15.3.1/lib/dangerousStyleValue.js",
      "npm:react@15.3.1/lib/CSSProperty.js",
      "npm:fbjs@0.8.4/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.4/lib/camelize.js",
      "npm:react@15.3.1/lib/AutoFocusUtils.js",
      "npm:react@15.3.1/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.3.1/lib/ReactDOMIDOperations.js",
      "npm:react@15.3.1/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.3.1/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.3.1/lib/DefaultEventPluginOrder.js",
      "npm:react@15.3.1/lib/ChangeEventPlugin.js",
      "npm:react@15.3.1/lib/BeforeInputEventPlugin.js",
      "npm:react@15.3.1/lib/SyntheticInputEvent.js",
      "npm:react@15.3.1/lib/SyntheticCompositionEvent.js",
      "npm:react@15.3.1/lib/FallbackCompositionState.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "react": "npm:react@15.3.1",
    "react-dom": "npm:react-dom@15.3.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.8"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.4": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:fbjs@0.8.4": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:immutable@3.8.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.0",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process@0.11.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.3.1": {
      "react": "npm:react@15.3.1"
    },
    "npm:react@15.3.1": {
      "fbjs": "npm:fbjs@0.8.4",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
