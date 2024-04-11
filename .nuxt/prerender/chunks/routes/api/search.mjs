import { defineEventHandler } from 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/h3/dist/index.mjs';
import { s as serverQueryContent$1, u as useAppConfig } from '../../runtime.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/destr/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/klona/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/scule/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/shiki/dist/core.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unified/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-character/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/slugify/slugify.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-parse/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-rehype/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/hast-util-to-string/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/github-slugger/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/detab/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-emoji/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/remark-gfm/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-external-links/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/yong/Data/Project-AI/Fashion/Git/docs/docs/node_modules/rehype-raw/index.js';

const serverQueryContent = serverQueryContent$1;

const search = defineEventHandler(async (event) => {
  const appConfig = useAppConfig();
  appConfig?.docus?.search?.mode || "meta";
  let docs = await serverQueryContent(event).find();
  docs = await Promise.all(
    docs.filter(
      (doc) => {
        return doc?._extension === "md" && doc?._draft === false && !doc?._empty;
      }
    ).map(
      async ({ _id: id, _path: path, _dir: dir, title = "", description = "", body = void 0, ...rest }) => {
        const { directoryIcon } = rest;
        if (directoryIcon) {
          console.log({ directoryIcon });
        }
        return {
          id,
          path,
          dir,
          title,
          description,
          keywords: body?.toc?.links.map((link) => link?.text),
          // Only fetch body for `full-text` mode.
          body: extractTextFromAst(body) || ""
        };
      }
    )
  );
  return docs;
});
function extractTextFromAst(node) {
  let text = "";
  if (node.type === "text") {
    text += node.value;
  }
  if (node.children) {
    for (const child of node.children) {
      text += " " + extractTextFromAst(child);
    }
  }
  return text;
}

export { search as default };
//# sourceMappingURL=search.mjs.map
