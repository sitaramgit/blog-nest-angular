-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 05, 2024 at 11:45 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nest_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1683009888610, 'UsersMigration1683009888610');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `description` varchar(20000) NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `image`, `created_at`, `updated_at`, `description`, `is_active`, `user_id`) VALUES
(1, 'kalyani developer', 'image-1683517002561-406447436.png', '2023-05-08 09:06:42.590381', '2023-05-08 15:28:05.899863', '<p>As you can see&nbsp;<code>leftJoinAndSelect</code>&nbsp;automatically loaded all of Timber&#39;s photos. The first argument is the relation you want to load and the second argument is an alias you assign to this relation&#39;s table. You can use this alias anywhere in query builder. For example, let&#39;s take all Timber&#39;s photos which aren&#39;t removed.</p>  <pre> <code>const user = await createQueryBuilder(&quot;user&quot;)     .leftJoinAndSelect(&quot;user.photos&quot;, &quot;photo&quot;)     .where(&quot;user.name = :name&quot;, { name: &quot;Timber&quot; })     .andWhere(&quot;photo.isRemoved = :isRemoved&quot;, { isRemoved: false })     .getOne()</code></pre>  <p>This will generate following SQL query:</p>  <pre> <code>SELECT user.*, photo.* FROM users user     LEFT JOIN photos photo ON photo.user = user.id     WHERE user.name = &#39;Timber&#39; AND photo.isRemoved = FALSE</code></pre>  <p>You can also add conditions to the join expression instead of using &quot;where&quot;:</p>  <pre> <code>const user = await createQueryBuilder(&quot;user&quot;)     .leftJoinAndSelect(&quot;user.photos&quot;, &quot;photo&quot;, &quot;photo.isRemoved = :isRemoved&quot;, {         isRemoved: false,     })     .where(&quot;user.name = :name&quot;, { name: &quot;Timber&quot; })     .getOne()</code></pre>  <p>This will generate the following SQL query:</p>  <pre> <code>SELECT user.*, photo.* FROM users user     LEFT JOIN photos photo ON photo.user = user.id AND photo.isRemoved = FALSE     WHERE user.name = &#39;Timber&#39;</code></pre>', 1, 27),
(2, 'Angular is running in development mode. Call enableProdMode() to enable production mode.', 'image-1683521939390-616510298.jpeg', '2023-05-08 10:28:59.418574', '2023-05-08 15:24:01.314836', '<h3>&nbsp;</h3>\r\n\r\n<h3>CRUD generator</h3>\r\n\r\n<p>Throughout the life span of a project, when we build new features, we often need to add new resources to our application. These resources typically require multiple, repetitive operations that we have to repeat each time we define a new resource.</p>\r\n\r\n<p>Introduction<a href=\"https://docs.nestjs.com/recipes/crud-generator#introduction\">#</a></p>\r\n\r\n<p>Let&#39;s imagine a real-world scenario, where we need to expose CRUD endpoints for 2 entities, let&#39;s say&nbsp;<strong>User</strong>&nbsp;and&nbsp;<strong>Product</strong>&nbsp;entities. Following the best practices, for each entity we would have to perform several operations, as follows:</p>\r\n\r\n<ul>\r\n	<li>Generate a module (<code>nest g mo</code>) to keep code organized and establish clear boundaries (grouping related components)</li>\r\n	<li>Generate a controller (<code>nest g co</code>) to define CRUD routes (or queries/mutations for GraphQL applications)</li>\r\n	<li>Generate a service (<code>nest g s</code>) to implement &amp; isolate business logic</li>\r\n	<li>Generate an entity class/interface to represent the resource data shape</li>\r\n	<li>Generate Data Transfer Objects (or inputs for GraphQL applications) to define how the data will be sent over the network</li>\r\n</ul>\r\n\r\n<p>That&#39;s a lot of steps!</p>\r\n\r\n<p>To help speed up this repetitive process,&nbsp;<a href=\"https://docs.nestjs.com/cli/overview\">Nest CLI</a>&nbsp;provides a generator (schematic) that automatically generates all the boilerplate code to help us avoid doing all of this, and make the developer experience much simpler.</p>\r\n\r\n<blockquote><strong>NOTE</strong>The schematic supports generating&nbsp;<strong>HTTP</strong>&nbsp;controllers,&nbsp;<strong>Microservice</strong>&nbsp;controllers,&nbsp;<strong>GraphQL</strong>&nbsp;resolvers (both code first and schema first), and&nbsp;<strong>WebSocket</strong>&nbsp;Gateways.</blockquote>\r\n\r\n<p>Generating a new resource<a href=\"https://docs.nestjs.com/recipes/crud-generator#generating-a-new-resource\">#</a></p>\r\n\r\n<p>To create a new resource, simply run the following command in the root directory of your project:</p>\r\n\r\n<pre>\r\n<code>\r\n$ nest g resource\r\n</code></pre>\r\n\r\n<p><code>nest g resource</code>&nbsp;command not only generates all the NestJS building blocks (module, service, controller classes) but also an entity class, DTO classes as well as the testing (<code>.spec</code>) files.</p>\r\n\r\n<p>Below you can see the generated controller file (for REST API):</p>\r\n\r\n<pre>\r\n<code>\r\n@Controller(&#39;users&#39;)\r\nexport class UsersController {\r\n  constructor(private readonly usersService: UsersService) {}\r\n\r\n  @Post()\r\n  create(@Body() createUserDto: CreateUserDto) {\r\n    return this.usersService.create(createUserDto);\r\n  }\r\n\r\n  @Get()\r\n  findAll() {\r\n    return this.usersService.findAll();\r\n  }\r\n\r\n  @Get(&#39;:id&#39;)\r\n  findOne(@Param(&#39;id&#39;) id: string) {\r\n    return this.usersService.findOne(+id);\r\n  }\r\n\r\n  @Patch(&#39;:id&#39;)\r\n  update(@Param(&#39;id&#39;) id: string, @Body() updateUserDto: UpdateUserDto) {\r\n    return this.usersService.update(+id, updateUserDto);\r\n  }\r\n\r\n  @Delete(&#39;:id&#39;)\r\n  remove(@Param(&#39;id&#39;) id: string) {\r\n    return this.usersService.remove(+id);\r\n  }\r\n}\r\n</code></pre>\r\n\r\n<p>Also, it automatically creates placeholders for all the CRUD endpoints (routes for REST APIs, queries and mutations for GraphQL, message subscribes for both Microservices and WebSocket Gateways) - all without having to lift a finger.</p>\r\n\r\n<blockquote><strong>NOTE</strong>Generated service classes are&nbsp;<strong>not</strong>&nbsp;tied to any specific&nbsp;<strong>ORM (or data source)</strong>. This makes the generator generic enough to meet the needs of any project. By default, all methods will contain placeholders, allowing you to populate it with the data sources specific to your project.</blockquote>\r\n\r\n<p>Likewise, if you want to generate resolvers for a GraphQL application, simply select the&nbsp;<code>GraphQL (code first)</code>&nbsp;(or&nbsp;<code>GraphQL (schema first)</code>) as your transport layer.</p>\r\n\r\n<p>In this case, NestJS will generate a resolver class instead of a REST API controller:</p>\r\n\r\n<pre>\r\n<code>\r\n$ nest g resource users\r\n\r\n&gt; ? What transport layer do you use? GraphQL (code first)\r\n&gt; ? Would you like to generate CRUD entry points? Yes\r\n&gt; CREATE src/users/users.module.ts (224 bytes)\r\n&gt; CREATE src/users/users.resolver.spec.ts (525 bytes)\r\n&gt; CREATE src/users/users.resolver.ts (1109 bytes)\r\n&gt; CREATE src/users/users.service.spec.ts (453 bytes)\r\n&gt; CREATE src/users/users.service.ts (625 bytes)\r\n&gt; CREATE src/users/dto/create-user.input.ts (195 bytes)\r\n&gt; CREATE src/users/dto/update-user.input.ts (281 bytes)\r\n&gt; CREATE src/users/entities/user.entity.ts (187 bytes)\r\n&gt; UPDATE src/app.module.ts (312 bytes)\r\n</code></pre>\r\n\r\n<blockquote><strong>HINT</strong>To avoid generating test files, you can pass the&nbsp;<code>--no-spec</code>&nbsp;flag, as follows:&nbsp;<code>nest g resource users --no-spec</code></blockquote>\r\n\r\n<p>We can see below, that not only were all boilerplate mutations and queries created, but everything is all tied together. We&#39;re utilizing the&nbsp;<code>UsersService</code>,&nbsp;<code>User</code>&nbsp;Entity, and our DTO&#39;s.</p>\r\n\r\n<pre>\r\n<code>\r\nimport { Resolver, Query, Mutation, Args, Int } from &#39;@nestjs/graphql&#39;;\r\nimport { UsersService } from &#39;./users.service&#39;;\r\nimport { User } from &#39;./entities/user.entity&#39;;\r\nimport { CreateUserInput } from &#39;./dto/create-user.input&#39;;\r\nimport { UpdateUserInput } from &#39;./dto/update-user.input&#39;;\r\n\r\n@Resolver(() =&gt; User)\r\nexport class UsersResolver {\r\n  constructor(private readonly usersService: UsersService) {}\r\n\r\n  @Mutation(() =&gt; User)\r\n  createUser(@Args(&#39;createUserInput&#39;) createUserInput: CreateUserInput) {\r\n    return this.usersService.create(createUserInput);\r\n  }\r\n\r\n  @Query(() =&gt; [User], { name: &#39;users&#39; })\r\n  findAll() {\r\n    return this.usersService.findAll();\r\n  }\r\n\r\n  @Query(() =&gt; User, { name: &#39;user&#39; })\r\n  findOne(@Args(&#39;id&#39;, { type: () =&gt; Int }) id: number) {\r\n    return this.usersService.findOne(id);\r\n  }\r\n\r\n  @Mutation(() =&gt; User)\r\n  updateUser(@Args(&#39;updateUserInput&#39;) updateUserInput: UpdateUserInput) {\r\n    return this.usersService.update(updateUserInput.id, updateUserInput);\r\n  }\r\n\r\n  @Mutation(() =&gt; User)\r\n  removeUser(@Args(&#39;id&#39;, { type: () =&gt; Int }) id: number) {\r\n    return this.usersService.remove(id);\r\n  }\r\n}</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n', 1, 27),
(3, 'leftJoinAndSelect', 'image-1683539595518-913438992.jpg', '2023-05-08 15:23:15.542232', '2023-05-08 15:27:59.785872', '<p>As you can see&nbsp;<code>leftJoinAndSelect</code>&nbsp;automatically loaded all of Timber&#39;s photos. The first argument is the relation you want to load and the second argument is an alias you assign to this relation&#39;s table. You can use this alias anywhere in query builder. For example, let&#39;s take all Timber&#39;s photos which aren&#39;t removed.</p>\n\n<pre>\n<code>const user = await createQueryBuilder(&quot;user&quot;)\n    .leftJoinAndSelect(&quot;user.photos&quot;, &quot;photo&quot;)\n    .where(&quot;user.name = :name&quot;, { name: &quot;Timber&quot; })\n    .andWhere(&quot;photo.isRemoved = :isRemoved&quot;, { isRemoved: false })\n    .getOne()</code></pre>\n\n<p>This will generate following SQL query:</p>\n\n<pre>\n<code>SELECT user.*, photo.* FROM users user\n    LEFT JOIN photos photo ON photo.user = user.id\n    WHERE user.name = &#39;Timber&#39; AND photo.isRemoved = FALSE</code></pre>\n\n<p>You can also add conditions to the join expression instead of using &quot;where&quot;:</p>\n\n<pre>\n<code>const user = await createQueryBuilder(&quot;user&quot;)\n    .leftJoinAndSelect(&quot;user.photos&quot;, &quot;photo&quot;, &quot;photo.isRemoved = :isRemoved&quot;, {\n        isRemoved: false,\n    })\n    .where(&quot;user.name = :name&quot;, { name: &quot;Timber&quot; })\n    .getOne()</code></pre>\n\n<p>This will generate the following SQL query:</p>\n\n<pre>\n<code>SELECT user.*, photo.* FROM users user\n    LEFT JOIN photos photo ON photo.user = user.id AND photo.isRemoved = FALSE\n    WHERE user.name = &#39;Timber&#39;</code></pre>\n', 1, 27),
(4, 'surya title', 'image-1683549866829-587719793.png', '2023-05-08 18:14:26.940447', '2023-05-08 18:14:26.940447', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<td>config</td>\r\n			<td><code>{ shouldFocus?: boolean }</code></td>\r\n			<td>\r\n			<p>Should focus the input during setting an error. This only works when the input&#39;s reference is registered, it will not work for custom register as well.</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<h2>Rules</h2>\r\n\r\n<ul>\r\n	<li>\r\n	<p>This method will not persist the associated input error if the input passes&nbsp;<code>register</code>&#39;s associated rules.</p>\r\n\r\n	<p>COPY</p>\r\n\r\n	<pre>\r\n<code>register(&#39;registerInput&#39;, { minLength: 4 }});\r\nsetError(&#39;registerInput&#39;, { type: &#39;custom&#39;, message: &#39;custom message&#39; });\r\n// validation will pass as long as minLength requirement pass\r\n</code></pre>\r\n	</li>\r\n	<li>\r\n	<p>An error that is not associated with an input field will be persisted until cleared with&nbsp;<code>clearErrors</code>. This behaviour is only applicable for built-in validation at field level.</p>\r\n\r\n	<p>COPY</p>\r\n\r\n	<pre>\r\n<code>setError(&#39;notRegisteredInput&#39;, { type: &#39;custom&#39;, message: &#39;custom message&#39; });\r\n// clearErrors() need to invoked manually to remove that custom error \r\n</code></pre>\r\n	</li>\r\n	<li>\r\n	<p>You can set a server or global error with&nbsp;<code>root</code>&nbsp;as the key. This type of error will not persist with each submission.</p>\r\n\r\n	<p>COPY</p>\r\n\r\n	<pre>\r\n<code>setError(&#39;root.serverError&#39;, { \r\n  type: &#39;400&#39;,\r\n});\r\nsetError(&#39;root.random&#39;, { \r\n  type: &#39;random&#39;, \r\n});</code></pre>\r\n	</li>\r\n	<li>\r\n	<p>Can be useful in the&nbsp;<code>handleSubmit</code>&nbsp;method when you want to give error feedback to a user after async validation. (ex: API returns validation errors)</p>\r\n	</li>\r\n	<li>\r\n	<p><code>shouldFocus</code>&nbsp;doesn&#39;t work when an input has been disabled.</p>\r\n	</li>\r\n	<li>\r\n	<p>This method will force set&nbsp;<code>isValid</code>&nbsp;formState to&nbsp;<code>false</code>, however, it&#39;s important to aware&nbsp;<code>isValid</code>&nbsp;will always be derived by the validation result from your input registration rules or schema result.</p>\r\n	</li>\r\n	<li>\r\n	<p>There are certain keyword which need to avoid before conflicting with type check. They are&nbsp;<code>type</code>,&nbsp;<code>types</code></p>\r\n	</li>\r\n</ul>\r\n\r\n<h2>Examples</h2>\r\n', 1, 27),
(5, 'sample post', 'image-1706100271963-166959703.jpeg', '2024-01-24 18:14:31.984621', '2024-01-24 18:14:31.984621', '<p>fjalksdjflkdsjf</p>\r\n\r\n<p>s</p>\r\n\r\n<p>s</p>\r\n\r\n<p>s</p>\r\n\r\n<p>s</p>\r\n\r\n<p>s</p>\r\n', 1, 27);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` text DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `is_active` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `token`, `created_at`, `updated_at`, `is_active`) VALUES
(1, 'purple talk', 'xcube@gmail.com', 'admin@123', NULL, '2023-05-02 14:22:57.399492', '2023-05-02 14:22:57.399492', 1),
(5, 'purple talk', 'xcube1@gmail.com', 'admin@123', NULL, '2023-05-02 14:33:12.501505', '2023-05-02 14:33:12.501505', 1),
(9, 'purple talk', 'xcube2@gmail.com', 'admin@123', NULL, '2023-05-02 14:43:00.302617', '2023-05-02 14:43:00.302617', 1),
(11, 'purple talk user', 'xcube3@gmail.com', '$2b$10$jHPh2Nfo4R1cm/NoebEbKeLOHuAiuzid0agHrc0PaTvrYXre.IlUG', 'eyJpZCI6MTEsImVtYWlsIjoieGN1YmUzQGdtYWlsLmNvbSIsImlhdCI6MTY4MzEwNjIxNiwiZXhwIjoxNjgzMTkyNjE2fQ', '2023-05-02 14:45:02.921645', '2023-05-03 15:00:16.000000', 1),
(12, 'purple talk user', 'xcube4@gmail.com', '$2b$10$GdVIOceMMu7TIGJJg/gh7O9GneA9TSqV9AG29cVvsv1sYVfZGQA92', 'eyJpZCI6MTIsImVtYWlsIjoieGN1YmU0QGdtYWlsLmNvbSIsImlhdCI6MTY4MzIxMzI3MCwiZXhwIjoxNjgzMjk5NjcwfQ', '2023-05-02 14:48:21.038388', '2023-05-04 20:44:30.000000', 1),
(14, 'Acharya NG Ranga Agricultural University , Guntur', 'sitaram@gmail.com', '$2b$10$IMfwXsCcXCTrgUwORUPCeu.u3QC9V8/7.vquHekpyrHd7uxvBNt7W', 'eyJpZCI6MTQsImVtYWlsIjoic2l0YXJhbUBnbWFpbC5jb20iLCJpYXQiOjE2ODMyMTU3MTMsImV4cCI6MTY4MzMwMjExM30', '2023-05-03 22:17:53.936690', '2023-05-04 21:25:13.000000', 1),
(24, 'k d k s sitaram', 'sitaram1@gmail.com', '$2b$10$wAXh4oJXGY428d1cgyei9O/WhUxnrj2Jm7H8AbWEEpK.vfpafDDy6', NULL, '2023-05-04 21:16:34.693150', '2023-05-04 21:16:34.693150', 1),
(27, 'siva123', 'siva@gmail.com', '$2b$10$MpwKgcDjp4a7wgzP3ZUI1eB9ORCwaq.gE54aQq/KbN8TcNBTWHLs2', 'eyJpZCI6MjcsImVtYWlsIjoic2l2YUBnbWFpbC5jb20iLCJpYXQiOjE3MDYxMDAyMjksImV4cCI6MTcwNjE4NjYyOX0', '2023-05-05 16:03:25.377346', '2024-01-24 18:13:49.000000', 1),
(28, 'sitaram', 'abc@gmail.com', '$2b$10$F4MaB3fr8Sxt5VqyUvgMFeyvi.QqpKSa/a3rdW/OIPuKJPySux85K', 'eyJpZCI6MjgsImVtYWlsIjoiYWJjQGdtYWlsLmNvbSIsImlhdCI6MTcwOTAxMzY3MSwiZXhwIjoxNzA5MTAwMDcxfQ', '2024-02-27 11:30:28.796664', '2024-02-27 11:31:11.000000', 1),
(31, 'durga', 'durga@gmail.com', '$2b$10$4alMuBMYwjPxLiY7HQyF3ePFvvw5QwwVmVUK/VgsqRARiKVFBdq1a', NULL, '2024-02-27 11:59:57.020921', '2024-02-27 11:59:57.020921', 1),
(32, 'durga1', 'durga1@gmail.com', '$2b$10$1mfJ6flJB9HbB5zPjBTLveQb24Z3WwgR7y4T0a.WjX7vtNezVEc7e', NULL, '2024-02-27 12:00:26.440248', '2024-02-27 12:00:26.440248', 1),
(34, 'duqwerqwer', 'du@gmail.com', '$2b$10$9Q.gLl5pm1qNEgeosrECxOZ6XcWl0fwJA84yt2Zbim.fZXPBYzHIS', NULL, '2024-02-27 13:19:16.163943', '2024-02-27 13:19:16.163943', 1),
(39, 'deepu', 'deepu@gmail.com', '$2b$10$UzVNdMzn0qHzIev5cHFssedUHcL4In.1HOgsa2C8NslmpZPw9WQGi', 'eyJpZCI6MzksImVtYWlsIjoiZGVlcHVAZ21haWwuY29tIiwiaWF0IjoxNzA5MTkwODA4LCJleHAiOjE3MDkyNzcyMDh9', '2024-02-27 15:51:45.075968', '2024-02-29 12:43:28.000000', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
