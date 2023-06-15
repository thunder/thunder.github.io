import{r as a,o as n,c as o,a as e,b as r,F as i,d as p,e as s}from"./app.d438baca.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const d={},l=p(`<h1 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h1><p>Thunder comes with an extensive set of tests and base classes, and you can benefit from that.</p><h2 id="write-tests" tabindex="-1"><a class="header-anchor" href="#write-tests" aria-hidden="true">#</a> Write tests</h2><p>Thunder provides two base classes, <code>ThunderTestBase.php</code> for functional browser tests and <code>ThunderJavascriptTestBase.php</code> for javascript tests. If you want to write tests for your project, you should use these classes.</p><p>There are also some traits, that provides useful functionalities:</p><ul><li><code>ThunderTestTrait.php</code></li><li><code>ThunderJavascriptTrait.php</code></li><li><code>ThunderArticleTestTrait.php</code></li><li><code>ThunderCkEditorTestTrait.php</code></li><li><code>ThunderMediaLibraryTestTrait.php</code></li><li><code>ThunderFormFieldTestTrait.php</code></li><li><code>ThunderMediaTestTrait.php</code></li><li><code>ThunderMetaTagTrait.php</code></li><li><code>ThunderParagraphsTestTrait.php</code></li><li><code>ThunderGqlsTestTrait.php</code></li></ul><h3 id="use-thunder-test-mock-request-for-external-requests" tabindex="-1"><a class="header-anchor" href="#use-thunder-test-mock-request-for-external-requests" aria-hidden="true">#</a> Use thunder_test_mock_request for external requests</h3><p>With the help of the <code>thunder_test_mock_request</code> test module, it&#39;s easy to mock external requests and make your tests more stable and reliable.</p><p>You just have to define the response for a request URL.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">Drupal<span class="token punctuation">\\</span>thunder_test_mock_request<span class="token punctuation">\\</span>MockHttpClientMiddleware</span><span class="token operator">::</span><span class="token function">addUrlResponse</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://oembed.com/providers.json&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;/path/to/myresponse.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Content-Type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;application/json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Note:</strong> If <code>thunder_test_mock_request</code> is enabled, all external requests have to be mocked.</p><h2 id="run-tests" tabindex="-1"><a class="header-anchor" href="#run-tests" aria-hidden="true">#</a> Run tests</h2><p>Running tests for a project isn&#39;t that easy. Since all your tests have the <code>$profile</code> variable set to &#39;thunder&#39;, the test runs against a plain Thunder installation. So these test sites, wouldn&#39;t contain any configuration changes from your project.</p><p>To prevent that, <code>ThunderTestTrait.php</code> can receive a database dump that is installed before the test runs.</p><h3 id="create-database-dump" tabindex="-1"><a class="header-anchor" href="#create-database-dump" aria-hidden="true">#</a> Create database dump</h3><p>Before you create the database dump, you should install your site from configuration to have an empty site without any content.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>drush si --existing-config
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>After that create the database dump:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docroot
php ./core/scripts/db-tools.php dump-database-d8-mysql <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> thunder.sql.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="execute-tests" tabindex="-1"><a class="header-anchor" href="#execute-tests" aria-hidden="true">#</a> Execute tests</h3><p>Before you execute your test, you have to set the <code>thunderDumpFile</code> env variable.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">thunderDumpFile</span><span class="token operator">=</span>/path/to/thunder.sql.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,22),u=s("Now you can execute your test, as described in the official "),h={href:"https://www.drupal.org/docs/automated-testing/phpunit-in-drupal",target:"_blank",rel:"noopener noreferrer"},m=s("Drupal documentation");function b(g,f){const t=a("ExternalLinkIcon");return n(),o(i,null,[l,e("p",null,[u,e("a",h,[m,r(t)])])],64)}var v=c(d,[["render",b]]);export{v as default};
