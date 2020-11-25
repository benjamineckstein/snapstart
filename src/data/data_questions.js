export const topic_questions = [
  //topic ID, level (0-4), question
  //1 cloud
  [1, 0, 'What is a cloud provider?'],
  [1, 0, 'What is a virtual machine?'],
  [1, 0, 'What is a 12-factor app?'],
  [1, 1, 'What is docker?'],
  [1, 1, 'What is kubernetes?'],
  [1, 1, 'Can you explain 3 of the 12-factor app?'],
  [1, 2, 'What is the difference between docker and kubernetes?'],
  [1, 2, 'Can you enlist 6 of the 12-factor app?'],
  [1, 2, 'What are resilence pattern?'],
  [1, 2, 'What is a circuit breaker?'],
  [1, 2, 'What is a serverless function?'],
  [1, 3, 'Can you enlist all 12 of the 12-factor app?'],
  [1, 4, 'Can you enlist all 12 of the 12-factor app and describe them briefly?'],
  //2 ci/cd
  [2, 0, 'What is a pipeline?'],
  [2, 0, 'What could be a reason that a pipeline fails?'],
  [2, 0, 'What does CI / CD mean?'],
  [2, 0, 'What does CI / CD mean?'],
  [2, 0, 'What is maven and what does it do?'],
  [2, 0, 'What is gradle and what does it do?'],
  [2, 1, 'What do you expect a build pipeline to do?'],
  [2, 1, 'What is IaC?'],
  [2, 1, 'What is the difference between Jenkins and Travis?'],
  [2, 2, 'What is the advantage of using terraform?'],
  [2, 3, 'How can you test your terraform configuration?'],
  //3 database
  [3, 0, 'Can you explain the n+1 problem?'],
  [3, 0, 'What is an index?'],
  [3, 0, 'What is an unique index?'],
  [3, 0, 'What is a primary key?'],
  [3, 0, 'What is a foreign key?'],
  [3, 0, 'Is a primary key always an integer?'],
  [3, 1, 'What is a transaction?'],
  [3, 1, 'Why do you need auto_increment?'],
  [3, 1, 'Why does an index increase performance?'],
  [3, 1, 'What is a rollback and why does this happen?'],
  [3, 1, 'What does it mean to commit a transaction?'],
  [3, 1, 'How can you temporarily ignore foreign key constraints?'],
  [3, 1, 'How to avoid n+1 queries?'],
  [3, 1, 'What is a sequence?'],
  [3, 2, 'Can you explain a scenario where an index actually hurts your performance?'],
  [3, 2, 'What is the pro and contra of using UUIDs as a primary key?'],
  [3, 2, 'What is a fulltable scan and what does this typically mean?'],
  [3, 3, 'What is an EXPLAIN command and when do you need this?'],

  //4 Distributed Systems
  [4, 0, 'What is software monitoring?'],
  [4, 0, 'What is resilence?'],
  [4, 0, 'What is meant by messaging in distributed systems?'],
  [4, 1, 'What is a typical resilence pattern?'],
  [4, 2, 'What is loose coupling? What are the benefits and how to archieve this?'],
  [4, 2, 'What is Kafka?'],
  [4, 2, 'What is the difference between vertical and horizontal scaling?'],
  [4, 2, 'What is RabbitMQ?'],
  [4, 2, 'What is an event-driven backbone and why should you use it?'],
  [4, 2, 'What is an api gateway and why should you use it?'],
  [4, 2, 'What is chaos engineering?'],

  //5 Architecture & Design
  [5, 0, 'What is a microservice architecture?'],
  [5, 0, 'What is a monolith?'],
  [5, 1, 'What is a monolith and when should you use this design?'],
  [5, 1, 'What is domain driven design?'],
  [5, 1, 'What is the onion architecture?'],
  [5, 1, 'What does a typical 3-tier layered architecture mean?'],

  //6 Tooling
  [6, 0, 'What is git?'],
  [6, 0, 'What does "git clone" do?'],
  [6, 0, 'What does "git add" do?'],
  [6, 1, 'What is JMeter?'],
  [6, 1, 'What is Postman?'],
  [6, 1, 'What is Gatling?'],
  [6, 1, 'What is Prometheus?'],
  [6, 2, 'What is the difference between git and svn?'],


  //7 APIs and Protocols
  [7, 0, 'What is HTTP mean and stand for?'],
  [7, 0, 'What is REST mean and stand for?'],
  [7, 0, 'What is JSON?'],
  [7, 0, 'What is XML?'],
  [7, 0, 'What is SOAP?'],
  [7, 1, 'What is HATEOAS?'],
  [7, 1, 'What is API versioning?'],
  [7, 1, 'What is contract testing?'],
  [7, 1, 'What is swagger?'],
  [7, 1, 'What is semantic versioning?'],
  [7, 2, 'What is GrapQL?'],

  //8 Testing & Test Automation
  [8, 0, 'What is TDD?'],
  [8, 0, 'What is testcoverage?'],
  [8, 0, 'Can you explain the testing pyramid?'],
  [8, 1, 'What are TestContainers?'],
  [8, 1, 'What does a high testcoverage imply and what not?'],
  [8, 1, 'What is the difference between unit and integration tests?'],
  [8, 1, 'What are mocks and when to use them?'],
  [8, 1, 'What is the difference between JUnit 4 and 5?'],
  [8, 1, 'What are parameterized tests?'],
  [8, 1, 'What is the purpose of testing software?'],
  [8, 2, 'What is a @Testfactory in JUnit 5?'],
  [8, 2, 'What is propertybased testing?'],
  [8, 3, 'What is a dynamic testing?'],
  [8, 3, 'What are the benefits of mutation testing?'],

  //9 Frontend Development
  //10 Agile Methods
  [10, 0, 'What is Scrum?'],
  [10, 0, 'What is the agile manifesto?'],
  [10, 0, 'What are scrum events?'],
  [10, 0, 'What is the difference betweend review and refinement?'],
  [10, 0, 'What is a retro?'],
  [10, 2, 'Please cite the agile manifesto.'],
  [10, 2, 'What is the summary of management 3.0?'],
  [10, 2, 'What is a PO?'],
  [10, 2, 'What is a scrummaster?'],
  [10, 3, 'What is servant leadership?'],
  [10, 4, 'Please explain briefly the transition from management 1.0 to 2.0 to 3.0'],

  //11 Software Craft
  [11, 0, 'What is the DRY principle?'],
  [11, 0, 'What is the KISS principle?'],
  [11, 0, 'What is clean code?'],
  [11, 0, 'What is technical debt?'],
  [11, 0, 'What is refactoring?'],
  [11, 0, 'What is a code review?'],
  [11, 1, 'What is the goal of a code review?'],
  [11, 1, 'How do you determine that some part of an application needs a refactoring?'],
  [11, 1, 'What is the SOLID principle?'],
  [11, 2, 'What is incremental development?'],
  [11, 2, 'What is mob programming? What are the benefits?'],
  [11, 2, 'What is pair programming? What are the pros and contras?'],

  //12 Documentation
  //13 Java DI based frameworks
  //14 Performance
  //15 Security
  //16 Mobile App Development
  //30 everything else
];