deps:
	@echo \* Installing dependencies...
	apt update
	curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
	apt install nodejs -y
	curl -o- -L https://yarnpkg.com/install.sh | bash
	@echo \* ...done

site:
	@echo \* Preparing regexlearn.com website files...
	export PATH=$$HOME/.yarn/bin:$$HOME/.config/yarn/global/node_modules/.bin:$$PATH && \
	cd regexlearn.com && \
	#git apply --whitespace=nowarn ../extension.patch && \
	yarn install && \
	yarn run build && \
	yarn run export
	@echo \* ...done

rebuild-site:
	@echo \* Rebuilding regexlearn.com website files...
	export PATH=$$HOME/.yarn/bin:$$HOME/.config/yarn/global/node_modules/.bin:$$PATH && \
	cd regexlearn.com && \
	yarn run build && \
	yarn run export
	@echo \* ...done

scorm:
	@echo \* Creating SCORM ZIP file...
	rm -rf dist
	mkdir dist
	cp -r imsmanifest.xml materials dist
	sed -i "s/Last edit: .../Last edit: $(shell date '+%Y-%m-%d %H:%M')/" dist/imsmanifest.xml
	cd regexlearn.com/out/ && cp -r _next 404 css images favicon.svg logo.svg interactively.webp Practise\ Starter.webp Learn.webp ../../dist/materials
	cd regexlearn.com/out/ && cp pl/learn/regex101/index.html ../../dist/materials/regex101.html
	cd dist/materials && sed -i -e 's~</head>~<script src="js/scorm.js" type="text/javascript"></script></head>~' -e 's~<body>~<body onload="ScormProcessInitialize();" onbeforeunload="ScormProcessTerminate();" onunload="ScormProcessTerminate();">~' regex101.html
	cd dist && \
	zip "regexlearn-scorm-$(shell date '+%Y_%m_%d-%H_%M').zip" -r .
	@echo ------------------------------------------
	@echo \* SCORM ZIP file created:
	@ls ./dist/*.zip

clean:
	@echo \* Removing regexlearn.com website files and SCORM build directory...
	rm -rf regexlearn.com dist
	@echo \*...done
