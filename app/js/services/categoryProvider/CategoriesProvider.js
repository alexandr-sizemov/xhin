function CategoriesProvider() {
  'ngInject';

  const service = {};
  service.getOtherCategories = function() {
    return [{
        title:'Banking, insurance and financial service',
        count: 1342
      },{
        title:'Marketing and advertising',
        count: 1304
      },{
        title:'Purchasing, transport and logistics',
        count: 719
      },{
        title:'Training / instruction',
        count: 3262
      },{
        title:'Sport, couching',
        count: 4698
      },{
        title:'Engineering / technical',
        count: 967
      },{
        title:'Not categorized',
        count: 1468
      },{
        title:'Administration',
        count: 3262
      }]
  };
  service.getTopCategories = function() {
    return [{
        title:'IT and Telecomunication',
        count: 4440
      },{
        title:'Sales and commerce',
        count: 3262
      },{
        title:'Production, construction ad trade',
        count: 2586
      },{
        title:'Management / executive and strategic management',
        count: 1952
      },{
        title:'Other',
        count: 3236
      },{
        title:'Engineering / technical',
        count: 2652
      },{
        title:'Health, medical and social',
        count: 2130
      },{
        title:'Finance and accounting',
        count: 1979
      }];
  };

  return service;
}

export default {
  name: 'CategoriesProvider',
  fn: CategoriesProvider
};