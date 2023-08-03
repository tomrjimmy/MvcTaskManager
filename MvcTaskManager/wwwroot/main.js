(self["webpackChunkTaskManager"] = self["webpackChunkTaskManager"] || []).push([["main"],{

/***/ 5369:
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 5746);
/* harmony import */ var _about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss?ngResource */ 7764);
/* harmony import */ var _about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let AboutComponent = class AboutComponent {};
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'about',
  template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AboutComponent);

/***/ }),

/***/ 7008:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 961);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 5369);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 6146);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 2129);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 7784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);









let AdminModule = class AdminModule {};
AdminModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
  exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent],
  providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService]
})], AdminModule);

/***/ }),

/***/ 961:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 3561);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 6354);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard.service */ 2129);
var _class;





let DashboardComponent = (_class = class DashboardComponent {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
    this.TeamMembersSummary = [];
    this.TeamMembers = [];
    this.Years = [];
    this.ToDay = new Date();
  }
  ngOnInit() {
    this.Designation = 'Lead';
    this.Username = 'Sameer';
    this.NoOfTeamMembers = 30;
    this.TotalCostOfAllProjects = 120;
    this.PendingTasks = 2;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 54213;
    this.CurrentExpenditure = 123;
    this.AvailableFunds = 8080;
    this.ToDay = new Date();
    this.Clients = ['ABC Infotech Ltd.', 'DEF Software Solutions', 'GHI Industries'];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    // [
    //   { Region: 'East', TeamMembersCount: 4, TemporarilyUnavailableMembers: 2 },
    //   { Region: 'West', TeamMembersCount: 2, TemporarilyUnavailableMembers: 1 },
    //   {
    //     Region: 'North',
    //     TeamMembersCount: 3,
    //     TemporarilyUnavailableMembers: 1,
    //   },
    //   {
    //     Region: 'South',
    //     TeamMembersCount: 2,
    //     TemporarilyUnavailableMembers: 1,
    //   },
    // ];
    this.TeamMembers = [{
      Region: 'East',
      Members: [{
        ID: 1,
        Name: 'Miller',
        Status: 'Available'
      }, {
        ID: 2,
        Name: 'John',
        Status: 'Busy'
      }, {
        ID: 3,
        Name: 'Tom',
        Status: 'Available'
      }, {
        ID: 4,
        Name: 'Maverick',
        Status: 'Busy'
      }]
    }, {
      Region: 'West',
      Members: [{
        ID: 1,
        Name: 'Fordy',
        Status: 'Available'
      }, {
        ID: 2,
        Name: 'Millery',
        Status: 'Busy'
      }]
    }, {
      Region: 'North',
      Members: [{
        ID: 1,
        Name: 'Johna',
        Status: 'Available'
      }, {
        ID: 2,
        Name: 'Toma',
        Status: 'Available'
      }, {
        ID: 3,
        Name: 'Millera',
        Status: 'Busy'
      }]
    }, {
      Region: 'South',
      Members: [{
        ID: 1,
        Name: 'Johnu',
        Status: 'Busy'
      }, {
        ID: 2,
        Name: 'Tomu',
        Status: 'Available'
      }]
    }];
  }
  onProjectChange($event) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 12345;
      this.CurrentExpenditure = 123;
      this.AvailableFunds = 123456;
    } else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 67890;
      this.CurrentExpenditure = 678;
      this.AvailableFunds = 678910;
    } else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 12345;
      this.CurrentExpenditure = 123;
      this.AvailableFunds = 123456;
    } else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost = 67890;
      this.CurrentExpenditure = 678;
      this.AvailableFunds = 678910;
    }
  }
}, _class.ctorParameters = () => [{
  type: src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService
}], _class);
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DashboardComponent);

/***/ }),

/***/ 6146:
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProfileComponent: () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _my_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile.component.html?ngResource */ 9092);
/* harmony import */ var _my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.component.scss?ngResource */ 5049);
/* harmony import */ var _my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let MyProfileComponent = class MyProfileComponent {};
MyProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-my-profile',
  template: _my_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MyProfileComponent);

/***/ }),

/***/ 7784:
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.html?ngResource */ 7529);
/* harmony import */ var _projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.scss?ngResource */ 9374);
/* harmony import */ var _projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/project */ 5265);
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/projects.service */ 7883);
var _class;






let ProjectsComponent = (_class = class ProjectsComponent {
  constructor(projectService) {
    this.projectService = projectService;
    this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_2__.Project();
    this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_2__.Project();
    this.editIndex = null;
    this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_2__.Project();
    this.deleteIndex = null;
    this.searchBy = "ProjectName";
    this.searchText = "";
  }
  ngOnInit() {
    debugger;
    this.projectService.getAllProjects().subscribe(response => {
      this.projects = response;
    });
  }
  onSaveClick() {
    this.projectService.insertProject(this.newProject).subscribe(response => {
      var p = new src_app_project__WEBPACK_IMPORTED_MODULE_2__.Project();
      p.projectId = response.projectId;
      p.projectName = response.projectName;
      p.startDate = response.startDate;
      p.teamSize = response.teamSize;
      this.projects.push(p);
      //clear textboxes
      this.newProject.projectId = null;
      this.newProject.projectName = null;
      this.newProject.startDate = null;
      this.newProject.teamSize = null;
    }, error => {
      console.log(error);
    });
  }
  onEditClick(event, index) {
    this.editProject.projectId = this.projects[index].projectId;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.startDate = this.projects[index].startDate;
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
    console.log(this.projects[index].startDate);
    console.log(this.editProject.startDate);
  }
  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe(response => {
      var p = new src_app_project__WEBPACK_IMPORTED_MODULE_2__.Project();
      p.projectId = response.projectId;
      p.projectName = response.projectName;
      p.startDate = response.startDate;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;
      //clear textboxes
      this.editProject.projectId = null;
      this.editProject.projectName = null;
      this.editProject.startDate = null;
      this.editProject.teamSize = null;
    }, error => {
      console.log(error);
    });
  }
  onDeleteClick(event, index) {
    this.deleteIndex = index;
    this.deleteProject.projectId = this.projects[index].projectId;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.startDate = this.projects[index].startDate;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }
  onDeleteConfirmClick() {
    this.projectService.deleteProject(this.deleteProject.projectId).subscribe(response => {
      this.projects.splice(this.deleteIndex, 1);
      this.deleteProject.projectId = null;
      this.deleteProject.projectName = null;
      this.deleteProject.startDate = null;
      this.deleteProject.teamSize = null;
    }, error => {
      console.log(error);
    });
  }
  onSearchClick() {
    this.projectService.searchProjects(this.searchBy, this.searchText).subscribe(response => {
      this.projects = response;
    }, error => {
      console.log(error);
    });
  }
}, _class.ctorParameters = () => [{
  type: src_app_projects_service__WEBPACK_IMPORTED_MODULE_3__.ProjectsService
}], _class);
ProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-projects',
  template: _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_projects_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProjectsComponent);

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ 961);
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/about/about.component */ 5369);
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-details/personal-details.component */ 2377);
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-details/contact-details.component */ 8433);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ 6193);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ 4035);
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-experience/work-experience.component */ 7203);
/* harmony import */ var _wizard_finished_wizard_finished_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard-finished/wizard-finished.component */ 5380);
/* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/projects/projects.component */ 7784);












const routes = [{
  path: "",
  redirectTo: "dashboard",
  pathMatch: "full"
}, {
  path: "welcome",
  component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent
}, {
  path: "dashboard",
  component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}, {
  path: "about",
  component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: "projects",
  component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__.ProjectsComponent
}, {
  path: "step-1",
  component: _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_2__.PersonalDetailsComponent
}, {
  path: "step-2",
  component: _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_3__.ContactDetailsComponent
}, {
  path: "step-3",
  component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent
}, {
  path: "step-4",
  component: _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__.WorkExperienceComponent
}, {
  path: "wizard-finished",
  component: _wizard_finished_wizard_finished_component__WEBPACK_IMPORTED_MODULE_7__.WizardFinishedComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
})], AppRoutingModule);

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let AppComponent = class AppComponent {
  constructor() {
    this.title = 'TaskManager';
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-details/personal-details.component */ 2377);
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-details/contact-details.component */ 8433);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ 6193);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ 4035);
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-experience/work-experience.component */ 7203);
/* harmony import */ var _wizard_finished_wizard_finished_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard-finished/wizard-finished.component */ 5380);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.module */ 7008);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);














let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_2__.PersonalDetailsComponent, _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_3__.ContactDetailsComponent, _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent, _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__.WorkExperienceComponent, _wizard_finished_wizard_finished_component__WEBPACK_IMPORTED_MODULE_7__.WizardFinishedComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__.AdminModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);

/***/ }),

/***/ 8433:
/*!**************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDetailsComponent: () => (/* binding */ ContactDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _contact_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-details.component.html?ngResource */ 3733);
/* harmony import */ var _contact_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-details.component.scss?ngResource */ 1215);
/* harmony import */ var _contact_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let ContactDetailsComponent = class ContactDetailsComponent {};
ContactDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-contact-details',
  template: _contact_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_contact_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ContactDetailsComponent);

/***/ }),

/***/ 2129:
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


let DashboardService = class DashboardService {
  // constructor() { }
  getTeamMembersSummary() {
    var TeamMembersSummary = [{
      Region: 'East',
      TeamMembersCount: 4,
      TemporarilyUnavailableMembers: 2
    }, {
      Region: 'West',
      TeamMembersCount: 2,
      TemporarilyUnavailableMembers: 1
    }, {
      Region: 'North',
      TeamMembersCount: 3,
      TemporarilyUnavailableMembers: 1
    }, {
      Region: 'South',
      TeamMembersCount: 2,
      TemporarilyUnavailableMembers: 1
    }];
    return TeamMembersSummary;
  }
};
DashboardService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], DashboardService);

/***/ }),

/***/ 2377:
/*!****************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailsComponent: () => (/* binding */ PersonalDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _personal_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-details.component.html?ngResource */ 4210);
/* harmony import */ var _personal_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-details.component.scss?ngResource */ 1469);
/* harmony import */ var _personal_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_personal_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let PersonalDetailsComponent = class PersonalDetailsComponent {};
PersonalDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-personal-details',
  template: _personal_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_personal_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PersonalDetailsComponent);

/***/ }),

/***/ 5265:
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor() {
    this.projectId = 0;
    this.projectName = null;
    this.startDate = null;
    this.teamSize = 0;
  }
}

/***/ }),

/***/ 7883:
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsService: () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



let ProjectsService = (_class = class ProjectsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    debugger;
  }
  getAllProjects() {
    debugger;
    return this.httpClient.get("/api/projects", {
      responseType: "json"
    });
  }
  getProjectById() {
    return this.httpClient.get("/api/projects", {
      responseType: "json"
    });
  }
  insertProject(newProject) {
    return this.httpClient.post("/api/projects", newProject, {
      responseType: "json"
    });
  }
  updateProject(existingProject) {
    return this.httpClient.put("/api/projects", existingProject, {
      responseType: "json"
    });
  }
  deleteProject(projectId) {
    return this.httpClient.delete("/api/projects?ProjectId=" + projectId);
  }
  searchProjects(searchBy, searchText) {
    return this.httpClient.get("/api/projects/search/" + searchBy + "/" + searchText, {
      responseType: "json"
    });
  }
}, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
}], _class);
ProjectsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ProjectsService);

/***/ }),

/***/ 4035:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _skills_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.component.html?ngResource */ 5182);
/* harmony import */ var _skills_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.component.scss?ngResource */ 7227);
/* harmony import */ var _skills_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skills_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let SkillsComponent = class SkillsComponent {};
SkillsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-skills',
  template: _skills_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_skills_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SkillsComponent);

/***/ }),

/***/ 6193:
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeComponent: () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component.html?ngResource */ 542);
/* harmony import */ var _welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.scss?ngResource */ 7957);
/* harmony import */ var _welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let WelcomeComponent = class WelcomeComponent {};
WelcomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-welcome',
  template: _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_welcome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WelcomeComponent);

/***/ }),

/***/ 5380:
/*!**************************************************************!*\
  !*** ./src/app/wizard-finished/wizard-finished.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WizardFinishedComponent: () => (/* binding */ WizardFinishedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _wizard_finished_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard-finished.component.html?ngResource */ 7087);
/* harmony import */ var _wizard_finished_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard-finished.component.scss?ngResource */ 6165);
/* harmony import */ var _wizard_finished_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wizard_finished_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let WizardFinishedComponent = class WizardFinishedComponent {};
WizardFinishedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-wizard-finished',
  template: _wizard_finished_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_wizard_finished_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WizardFinishedComponent);

/***/ }),

/***/ 7203:
/*!**************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkExperienceComponent: () => (/* binding */ WorkExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _work_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-experience.component.html?ngResource */ 9006);
/* harmony import */ var _work_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-experience.component.scss?ngResource */ 9479);
/* harmony import */ var _work_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_work_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let WorkExperienceComponent = class WorkExperienceComponent {};
WorkExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-work-experience',
  template: _work_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_work_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], WorkExperienceComponent);

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 7764:
/*!*************************************************************!*\
  !*** ./src/app/admin/about/about.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6354:
/*!*********************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5049:
/*!***********************************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9374:
/*!*******************************************************************!*\
  !*** ./src/app/admin/projects/projects.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1215:
/*!***************************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1469:
/*!*****************************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7227:
/*!*********************************************************!*\
  !*** ./src/app/skills/skills.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7957:
/*!***********************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6165:
/*!***************************************************************************!*\
  !*** ./src/app/wizard-finished/wizard-finished.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9479:
/*!***************************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5746:
/*!*************************************************************!*\
  !*** ./src/app/admin/about/about.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>about works!</p>\n";

/***/ }),

/***/ 3561:
/*!*********************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/\">Home</a></li>\n      <li class=\"breadcrumb-item active\">Dashboard</li>\n    </ol>\n  </nav>\n  \n  <h5>Dashboard</h5>\n  <div class=\"row\">\n    <div class=\"col-lg-3 pb-3\" style=\"background-color: #e9e6e6\">\n      <div class=\"row\">\n        <div\n          class=\"col-11 text-white text-center mx-auto rounded pt-2 pb-2 font-weight-bold\"\n          style=\"\n            background-color: #a39e9e;\n            font-family: 'Arial Narrow Bold', sans-serif;\n          \"\n        >\n          {{ Designation | uppercase }}\n        </div>\n        <div class=\"col-12 text-center mt-2\">\n          <img src=\"assets/user.png\" width=\"120px\" />\n        </div>\n        <div\n          class=\"col-12 text-center pt-2 pb-2 font-weight-bold\"\n          style=\"font-family: Tahoma\"\n        >\n          {{ Username | lowercase}}\n        </div>\n        <div class=\"col-12 text-center pt-2 pb-2\" style=\"font-family: Arial\">\n          TEAM SUMMARY\n        </div>\n        <div class=\"col-12 mb-3\">\n          <ul class=\"list-group\">\n            <li\n              class=\"list-group-item d-flex justify-content-between align-items-center\"\n            >\n              NO. OF TEAM MEMBERS\n              <span\n                class=\"badge rounded-pill text-bg-primary\"\n                style=\"font-size: 13px\"\n                >{{ NoOfTeamMembers }}</span\n              >\n            </li>\n            <li\n              class=\"list-group-item d-flex justify-content-between align-items-center\"\n            >\n              TOTAL COST OF ALL PROJECTS\n              <span\n                class=\"badge rounded-pill text-bg-primary\"\n                style=\"font-size: 13px\"\n                >$ {{ TotalCostOfAllProjects }} k</span\n              >\n            </li>\n            <li\n              class=\"list-group-item d-flex justify-content-between align-items-center\"\n            >\n              PENDING TASKS\n              <span\n                class=\"badge rounded-pill text-bg-primary\"\n                style=\"font-size: 13px\"\n                >{{ PendingTasks }}</span\n              >\n            </li>\n            <li\n              class=\"list-group-item d-flex justify-content-between align-items-center\"\n            >\n              UPCOMING PROJECTS\n              <span\n                class=\"badge rounded-pill text-bg-primary\"\n                style=\"font-size: 13px\"\n                >{{ UpComingProjects | percent}}</span\n              >\n            </li>\n          </ul>\n        </div>\n        <div\n          class=\"col-12 text-center pt-2 pb-2\"\n          style=\"font-family: 'Arial Narrow'\"\n        >\n          CLIENTS\n        </div>\n        <div class=\"col-12\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" *ngFor=\"let client of Clients\">\n              {{client | slice: 0: 10}}\n            </li>\n          </ul>\n          {{TeamMembersSummary | json}}\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"row\">\n        <div class=\"col-12 pt-0 pb-2\" style=\"background-color: #e9e6e6\">\n          <div class=\"row mt-2\">\n            <div class=\"col-6 text-left\">\n              <div class=\"dropdown\">\n                <button\n                  class=\"btn btn-secondary dropdown-toggle\"\n                  type=\"button\"\n                  id=\"dropdownMenuButton1\"\n                  data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" \n                  aria-expanded=\"false\"\n                >\n                  Select\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                  <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let project of Projects\"\n                  onclick=\"return false\" (click)=\"onProjectChange($event)\">\n                    {{project}}</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-6 text-right\">\n              <div class=\"dropdown\">\n                <button\n                  class=\"btn btn-secondary dropdown-toggle\"\n                  type=\"button\"\n                  id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\"\n                  aria-haspopup=\"true\" aria-expanded=\"false\"\n                >\n                  2019\n                </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n                  <li><a class=\"dropdown-item\" href=\"#\" *ngFor=\"let year of Years\">\n                  <span [ngSwitch]=\"year\">\n                    <span *ngSwitchCase=\"'2019'\" style=\"color: green;\">{{year}}</span>\n                    <span *ngSwitchCase=\"'2018'\" style=\"color: orange;\">{{year}}</span>\n                    <span *ngSwitchCase=\"'2017'\" style=\"color: red;\">{{year}}</span>\n                  </span>  \n                  </a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div\n          class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-auto rounded font-weight-bold\"\n          style=\"background-color: #718d97; font-family: 'Arial Narrow'\"\n        >\n          PROJECT BRIEFING\n        </div>\n        <div class=\"col-12\">\n          <table class=\"table table-borderless\">\n            <tr>\n              <td>Project Cost</td>\n              <td>{{ ProjectCost  | currency: \"USD\" }}</td>\n            </tr>\n            <tr>\n              <td>Current Expenditure</td>\n              <td>{{ CurrentExpenditure | currency: \"INR\"}}</td>\n              \n            </tr>\n            <tr>\n              <td>Available Funds</td>\n              <td>{{ AvailableFunds | currency: \"INR\"}}</td>\n            </tr>\n          </table>\n        </div>\n        <div\n          class=\"col-11 mx-auto mt-1 text-white text-center pt-2 pb-2 mx-2 rounded font-weight-bold\"\n          style=\"background-color: #718d97; font-family: 'Arial Narrow'\"\n        >\n          TEAM MEMBERS SUMMARY\n        </div>\n        <div class=\"col-12\">\n          <table class=\"table\">\n            <tr>\n              <th>Region</th>\n              <th>Team Members Count</th>\n              <th>Temporarily Unavailable Members</th>\n            </tr>\n            <tr *ngFor=\"let teamMemberSummary of TeamMembersSummary\">\n              <td>\n                <b>{{teamMemberSummary.Region}}</b>\n              </td>\n              <td>{{teamMemberSummary.TeamMembersCount}}</td>\n              <td>{{teamMemberSummary.TemporarilyUnavailableMembers}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3\" style=\"background-color: #e9e6e6\">\n      <div class=\"row\">\n        <div\n          class=\"col-11 mx-auto mt-1 text-white text-center pt-1 pb-2 mx-2 rounded font-weight-bold\"\n          style=\"background-color: #718d97; font-family: 'Arial Narrow'\"\n        >\n          TEAM MEMBERS\n        </div>\n        <div class=\"col-lg-12 pt-2\">\n          <div class=\"accordion\" id=\"accordion1\">\n            <!-- region cards starts -->\n            <div class=\"card\" *ngFor=\"let region of TeamMembers; let i=index\">\n              <div class=\"card-header bg-secondary\" id=\"card1\">\n                <h2 class=\"mb-0\">\n                  <button\n                    class=\"btn btn-link text-white\"\n                    type=\"button\"\n                    data-toggle=\"collapse\"\n                    [attr.data-target]=\"'#cardbody' + i\"\n                  >\n                    {{region.Region}}\n                  </button>\n                </h2>\n              </div>\n              <div [id]=\"'cardbody' + i\" class=\"collapse\" data-parent=\"#accordion1\" [ngClass]=\"(i == 0)? 'show':''\">\n                <div class=\"card-body\">\n\n                  <div *ngIf=\"i == 0; then firstTemplate; else secondTemplate;\">\n\n                  </div>\n                  <ng-template #firstTemplate>\n                    <div class=\"card\" *ngFor=\"let member of region.Members\">\n                      <div class=\"card-header bg-primary text-white\">\n                       <span [style.color]=\"(member.Status == 'Busy')? 'white':'black'\"> #{{member.ID}} {{member.Name}} </span>\n                      </div>\n                      <div class=\"card-body\">{{member.Status}}</div>\n                    </div>\n                  </ng-template>\n                  <ng-template #secondTemplate>\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>ID</th>\n                        <th>Name</th>\n                        <th>Status</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let member of region.Members\">\n                        <td>{{member.ID}}</td>\n                        <td [style.color]=\"(member.Status == 'Busy')? 'red':'black'\">{{member.Name}}</td>\n                        <td><i class=\"fa fa-phone\"></i> {{member.Status}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </ng-template>\n                </div>\n              </div>\n            </div>\n            <!-- region cards ends -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";

/***/ }),

/***/ 9092:
/*!***********************************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>my-profile works!</p>\n";

/***/ }),

/***/ 7529:
/*!*******************************************************************!*\
  !*** ./src/app/admin/projects/projects.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<h1>Projects</h1>\n<div class=\"row\">\n  <div class=\"col-8 mx-auto\">\n    <div class=\"form-group form-row\">\n      <label for=\"drpSearchBy\" class=\"col-form-label col-3\">Search By</label>\n      <div class=\"col-9\">\n        <select class=\"drpSearchBy\" id=\"drpSearchBy\" name=\"SearchBy\" [(ngModel)]=\"searchBy\">\n          <option value=\"ProjectId\">Project Id</option>\n          <option value=\"ProjectName\">Project Name</option>\n          <option value=\"StartDate\">Start Date</option>\n          <option value=\"TeamSize\">Team Size</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group form-row\">\n      <label for=\"txtSearch\" class=\"col-form-label col-3\">Search:</label>\n      <div class=\"col-9\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" id=\"txtSearch\" name=\"SearchText\" [(ngModel)]=\"searchText\">\n          <div class=\"input-group-append\" (click)=\"onSearchClick()\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-8 mx-auto\">\n    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#newModal\">Create Project</button>\n  </div>\n  <div class=\"col-8 mx-auto\">\n    <table class=\"table\">\n      <thead>\n        <th>Project ID</th>\n        <th>Project Name</th>\n        <th>Date of Start</th>\n        <th>Team Size</th>\n        <th>Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let project of projects; let i= index\">\n          <td>{{project.projectId}}</td>\n          <td>{{project.projectName}}</td>\n          <td>{{project.startDate}}</td>\n          <td>{{project.teamSize}}</td>\n          <td>\n            <button class=\"btn btn-info\" \n            (click)=\"onEditClick($event, i)\"\n            data-toggle=\"modal\" \n            data-target=\"#editModal\">Edit</button>\n            &nbsp;\n            <button class=\"btn btn-info\" \n            (click)=\"onDeleteClick($event, i)\"\n            data-toggle=\"modal\" \n            data-target=\"#deleteModal\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"newModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">New Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtNewProjectID\" style=\"width:100px\" class=\"form-control\" placeholder=\"Project ID\"\n                name=\"ProjectID\" [(ngModel)]=\"newProject.projectId\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtNewProjectName\" class=\"form-control\" placeholder=\"Project Name\"\n                name=\"ProjectName\" [(ngModel)]=\"newProject.projectName\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtNewDateOfStart\" class=\"col-sm-4 col-form-label\">Date of Start</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtNewDateOfStart\" style=\"width:150px\" class=\"form-control\"\n                placeholder=\"Date of Start\" name=\"DateOfStart\" [(ngModel)]=\"newProject.startDate\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"txtTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\"\n                name=\"TeamSize\" [(ngModel)]=\"newProject.teamSize\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onSaveClick()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<!-- Edit Project -->\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"editModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Edit Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group row\">\n            <label for=\"lblEditProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtEditProjectID\" style=\"width:100px\" class=\"form-control-plain-text\" placeholder=\"Project ID\"\n                name=\"ProjectID\" [(ngModel)]=\"editProject.projectId\" disabled=\"disabled\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"lblEditProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtEditProjectName\" class=\"form-control\" placeholder=\"Project Name\"\n                name=\"ProjectName\" [(ngModel)]=\"editProject.projectName\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"lblEditStartDate\" class=\"col-sm-4 col-form-label\">Start Date</label>\n            <div class=\"col-sm-8\">\n              <input type=\"date\" id=\"txtEditStartDate_{{editProject.projectId}}\" style=\"width:150px\" class=\"form-control\"\n                placeholder=\"Start Date\" name=\"StartDate_{{editProject.projectId}}\" [(ngModel)]=\"editProject.startDate\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"lblEditTeamSize\" class=\"col-sm-4 col-form-label\">Team Size</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtEditTeamSize\" style=\"width:150px\" class=\"form-control\" placeholder=\"Team Size\"\n                name=\"TeamSize\" [(ngModel)]=\"editProject.teamSize\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onUpdateClick()\">Update</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<!-- Delete Project -->\n<form>\n  <div class=\"modal\" role=\"dialog\" id=\"deleteModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"width:700px\">\n        <div class=\"modal-header\">\n          <div class=\"modal-title\">Delete Project</div>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group row\">\n            <label for=\"lblDeleteProjectID\" class=\"col-sm-4 col-form-label\">Project ID</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" id=\"txtDeleteProjectID\" style=\"width:100px\" class=\"form-control-plain-text\" placeholder=\"Project ID\"\n                name=\"ProjectID\" [(ngModel)]=\"deleteProject.projectId\" disabled=\"disabled\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"lblDeleteProjectName\" class=\"col-sm-4 col-form-label\">Project Name</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" id=\"txtDeleteProjectName\" class=\"form-control\" placeholder=\"Project Name\"\n                name=\"ProjectName\" [(ngModel)]=\"deleteProject.projectName\" disabled=\"disabled\">\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-warning\" data-dismiss=\"modal\">Cancel</button>\n          <button class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onDeleteConfirmClick()\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-sm bg-success\" navbar-dark>\n  <a class=\"navbar-brand\" href=\"#\">\n    Angular Task Manager\n  </a>\n<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>  \n<div class=\"collapse navbar-collapse\" id=\"mynav\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"about\">About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"projects\">Projects</a>\n    </li>\n  </ul>\n  <form class=\"form-inline my-2 my-lg-0\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"search\">\n          <i class=\"fa fa-search\"></i>\n        </span>\n      </div>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n    </div>\n    <button class=\"btn btn-warning my2- my-sm-0\" type=\"button\">Search</button>\n  </form>\n</div>\n</nav>\n\n<div class=\"container-fluid\">\n<h1>Hello...</h1>\n<router-outlet></router-outlet>\n</div>\n\n<!-- For understanding how we added component -->\n<!-- <div>\n  <app-dashboard></app-dashboard>\n</div>\n\n<div>\n  <about></about>\n</div> -->\n";

/***/ }),

/***/ 3733:
/*!***************************************************************************!*\
  !*** ./src/app/contact-details/contact-details.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n    <!-- box at horizontally center-->\n    <div class=\"col-lg-11 col-xl-9 mx-auto\">\n\n        <div class=\"card\">\n\n            <div class=\"card-header bg-secondary text-white\">\n                <h1>Profile Wizard</h1>\n            </div>\n\n            <div class=\"card-body\">\n                <!-- box 1 starts -->\n                <div class=\"box-1 rounded\">\n                    <div class=\"row m-0\">\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">1</span>\n                            </div>\n                            <div>\n                                <h5>Personal Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">2</span>\n                            </div>\n                            <div>\n                                <h5>Contact Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px #b2cfe4\">\n                            <div>\n                                <span class=\"badge badge-pill badge-secondary p-4\" style=\"font-size:30px\">3</span>\n                            </div>\n                            <div>\n                                <h5>Skills</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px #b2cfe4\">\n                            <div>\n                                <span class=\"badge badge-pill badge-secondary p-4\" style=\"font-size:30px\">4</span>\n                            </div>\n                            <div>\n                                <h5>Work Experience</h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- box 1 ends -->\n\n                <!-- box 2 starts -->\n                <div class=\"box-2 pt-2\">\n                    <h3>Step 2: Contact Details</h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-xl-9 mx-auto mt-3\">\n\n                            <!-- Email -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"email\" class=\"col-md-3 col-form-label\">Email</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\">\n                                </div>\n                            </div>\n\n                            <!-- Mobile -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"mobile\" class=\"col-md-3 col-form-label\">Mobile</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"mobile\" id=\"mobile\">\n                                </div>\n                            </div>\n\n                            <!-- Country -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"country\" class=\"col-md-3 col-form-label\">Country</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"country\" id=\"country\">\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n                <!-- box 2 ends -->\n            </div>\n\n            <div class=\"card-footer text-right\">\n                <a class=\"btn btn-warning mr-2\" [routerLink]=\" [ '/step-1' ] \">Back</a>\n                <a class=\"btn btn-success\" [routerLink]=\" [ '/step-3' ] \">Next</a>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 4210:
/*!*****************************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n    <!--box at horizontally center-->\n    <div class=\"col-lg-11 col-xl-9 mx-auto\">\n        <div class=\"card\">\n            <div class=\"card-header bg-secondary text-white\">\n                <h1>Profile Wizard</h1>\n            </div>\n            <div class=\"card-body\">\n                <!--box 1 starts-->\n                <div class=\"box-1\">\n                    <div class=\"row m-0\">\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">1</span>\n                            </div>\n                            <div>\n                                <h5>Personal Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px #b2cfe4\">\n                            <div>\n                                <span class=\"badge badge-pill badge-secondary p-4\" style=\"font-size:30px\">2</span>\n                            </div>\n                            <div>\n                                <h5>Contact Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px #b2cfe4\">\n                            <div>\n                                <span class=\"badge badge-pill badge-secondary p-4\" style=\"font-size:30px\">3</span>\n                            </div>\n                            <div>\n                                <h5>Skills</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px #b2cfe4\">\n                            <div>\n                                <span class=\"badge badge-pill badge-secondary p-4\" style=\"font-size:30px\">4</span>\n                            </div>\n                            <div>\n                                <h5>Work Experience</h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- box 2 starts -->\n                <div class=\"box-2 pt-2\">\n                <h3>Step 1: Personal Details</h3>\n\n                <div class=\"row\">\n                    <div class=\"col-xl-9 mx-auto mt-3\">\n\n                        <!-- First name -->\n                        <div class=\"form-group form-row\">\n                            <label for=\"firstName\" class=\"col-md-3 col-form-label\">First Name</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" class=\"form-control\" name=\"firstName\" id=\"firstName\">\n                            </div>\n                        </div>\n\n                        <!-- Last name -->\n                        <div class=\"form-group form-row\">\n                            <label for=\"lastName\" class=\"col-md-3 col-form-label\">Last Name</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\">\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                 </div>\n            <!-- box 2 ends -->\n                </div>\n                <div class=\"card-footer text-right\">\n                    <a class=\"btn btn-success\" [routerLink]=\" [ '/step-2' ] \">Next</a>\n                </div>\n            </div>\n        </div>\n    </div>";

/***/ }),

/***/ 5182:
/*!*********************************************************!*\
  !*** ./src/app/skills/skills.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n    <!-- box at horizontally center-->\n    <div class=\"col-lg-11 col-xl-9 mx-auto\">\n\n        <div class=\"card\">\n\n            <div class=\"card-header bg-secondary text-white\">\n                <h1>Profile Wizard</h1>\n            </div>\n\n            <div class=\"card-body\">\n                <!-- box 1 starts -->\n                <div class=\"box-1 rounded\">\n                    <div class=\"row m-0\">\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">1</span>\n                            </div>\n                            <div>\n                                <h5>Personal Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">2</span>\n                            </div>\n                            <div>\n                                <h5>Contact Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">3</span>\n                            </div>\n                            <div>\n                                <h5>Skills</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px #b2cfe4\">\n                            <div>\n                                <span class=\"badge badge-pill badge-secondary p-4\" style=\"font-size:30px\">4</span>\n                            </div>\n                            <div>\n                                <h5>Work Experience</h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- box 1 ends -->\n\n                <!-- box 2 starts -->\n                <div class=\"box-2 pt-2\">\n                    <h3>Step 3: Skills Details</h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-xl-9 mx-auto mt-3\">\n\n                            <!-- Skill-1 -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"skill-1\" class=\"col-md-3 col-form-label\">Skill 1</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"skill-1\" id=\"skill-1\">\n                                </div>\n                            </div>\n\n                            <!-- Skill-2 -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"skill-2\" class=\"col-md-3 col-form-label\">Skill 2</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"skill-2\" id=\"skill-2\">\n                                </div>\n                            </div>\n\n                            <!-- Skill-3 -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"skill-3\" class=\"col-md-3 col-form-label\">Skill 3</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"skill-3\" id=\"skill-3\">\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n                <!-- box 2 ends -->\n            </div>\n\n            <div class=\"card-footer text-right\">\n                <a class=\"btn btn-warning mr-2\" [routerLink]=\" [ '/step-2' ] \">Back</a>\n                <a class=\"btn btn-success\" [routerLink]=\" [ '/step-4' ] \">Next</a>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 542:
/*!***********************************************************!*\
  !*** ./src/app/welcome/welcome.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n    <!-- box at horizontally center-->\n    <div class=\"col-lg-11 col-xl-9 mx-auto\">\n\n        <div class=\"card\">\n\n            <div class=\"card-header\">\n                <h1>Wizard Assignment</h1>\n            </div>\n\n            <div class=\"card-body\">\n                Welcome to the solution of assignment\n            </div>\n\n            <div class=\"card-footer text-right\">\n                <a class=\"btn btn-primary\" [routerLink]=\" [ '/step-1' ] \">Start Wizard</a>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 7087:
/*!***************************************************************************!*\
  !*** ./src/app/wizard-finished/wizard-finished.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>wizard-finished works!</p>\n";

/***/ }),

/***/ 9006:
/*!***************************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\n    <!-- box at horizontally center-->\n    <div class=\"col-lg-11 col-xl-9 mx-auto\">\n\n        <div class=\"card\">\n\n            <div class=\"card-header bg-secondary text-white\">\n                <h1>Profile Wizard</h1>\n            </div>\n\n            <div class=\"card-body\">\n                <!-- box 1 starts -->\n                <div class=\"box-1 rounded\">\n                    <div class=\"row m-0\">\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">1</span>\n                            </div>\n                            <div>\n                                <h5>Personal Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">2</span>\n                            </div>\n                            <div>\n                                <h5>Contact Details</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">3</span>\n                            </div>\n                            <div>\n                                <h5>Skills</h5>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 text-center p-3\" style=\"border-top: solid 5px green\">\n                            <div>\n                                <span class=\"badge badge-pill badge-success p-4\" style=\"font-size:30px\">4</span>\n                            </div>\n                            <div>\n                                <h5>Work Experience</h5>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- box 1 ends -->\n\n                <!-- box 2 starts -->\n                <div class=\"box-2 pt-2\">\n                    <h3>Step 4: Work Experience Details</h3>\n\n                    <div class=\"row\">\n                        <div class=\"col-xl-9 mx-auto mt-3\">\n\n                            <!-- Job-1 -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"job-1\" class=\"col-md-3 col-form-label\">Job 1</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"job-1\" id=\"job-1\">\n                                </div>\n                            </div>\n\n                            <!-- Job-2 -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"job-2\" class=\"col-md-3 col-form-label\">Job 2</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"job-2\" id=\"job-2\">\n                                </div>\n                            </div>\n\n                            <!-- Job-3 -->\n                            <div class=\"form-group form-row\">\n                                <label for=\"job-3\" class=\"col-md-3 col-form-label\">Job 3</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" class=\"form-control\" name=\"job-3\" id=\"job-3\">\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n                <!-- box 2 ends -->\n            </div>\n\n            <div class=\"card-footer text-right\">\n                <a class=\"btn btn-warning mr-2\" [routerLink]=\" [ '/step-3' ] \">Back</a>\n                <a class=\"btn btn-danger\" [routerLink]=\" [ '/wizard-finished' ] \">Close</a>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map