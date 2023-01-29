var express = require('express');
var router = express.Router();

var UsersModel = require('../schema/department');
//var Response = require('../response');


//List Table Data
router.get('/', function(req, res) {
    res.render('departmentp');
         
});

//List Table Data
router.get('/display_department', function(req, res) {
    UsersModel.find(function(err, departments) {
        if (err) {
            console.log(err);
        } else {
            res.render('display-department', { departments: departments });
            console.log(departments);
        }
    });
});

//Display Form 
//console.log('priyal')

router.get('/add_department', function(req, res, next) {
    res.render('add-department');
});


router.get('/department', function(req, res, next) {
    res.render('departmentp');
});



/* POST Data. */
router.post('/add_department', function(req, res, next) {
    console.log(req.body);

    const mybodydata = {
        departmentid: req.body.departmentid,
        departmentname: req.body.departmentname
        
    }
    var data = UsersModel(mybodydata);
    //var data = UsersModel(req.body);
    data.save(function(err) {
        if (err) {

            res.render('add-department', { message: 'User registered not successfully!' });
        } else {

            res.render('add-department', { message: 'User registered successfully!' });
        }
    })
});

/* DELETE User BY ID */
router.get('/delete/:id', function(req, res) {
    UsersModel.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {

            //req.flash('error_msg', 'Record Not Deleted');
            res.redirect('../display');
        } else {

            //req.flash('success_msg', 'Record Deleted');
            res.redirect('../display_department');
        }
    });
});

/* GET SINGLE User BY ID */
router.get('/edit/:id', function(req, res) {
    console.log(req.params.id);
    UsersModel.findById(req.params.id, function(err, department) {
        if (err) {
            console.log(err);
        } else {
            console.log(department);

            res.render('edit-department', { departDetail: department });
        }
    });
});

/* UPDATE User */


 router.post('/edit/:id', function(req, res) {
    UsersModel.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {
           // req.flash('error_msg', 'Something went wrong! User could not updated.');
            res.redirect('edit/' + req.params.id);
        } else {
            //req.flash('success_msg', 'Record Updated');
            res.redirect('../display_department');
        }
    });
});
 


/////employee

var EmployeeModel = require('../schema/employee');
var Response = require('../response');



//List Table Data
router.get('/employee', function(req, res) {
    res.render('employeep');
         
});


//List Table Data
router.get('/display_employee', function(req, res) {
    EmployeeModel.find(function(err, employees) {
        if (err) {
            console.log(err);
        } else {
            res.render('display-employee', { employees: employees });
            console.log(employees);
        }
    });
});


//Display Form 
router.get('/add_employee', function(req, res, next) {
    res.render('add-employee');
});


/* POST Data. */
router.post('/add_employee', function(req, res, next) {
    console.log(req.body);

    const mybodydata = {
        employeeid: req.body.employeeid,
        sinnumber: req.body.sinnumber,
        name: req.body.name,
        dateofbirth: req.body.dateofbirth,
        email: req.body.email,
        phone: req.body.phone,
        jobclass: req.body.jobclass,
        annualsalary: req.body.annualsalary,
        address: req.body.address,
        hiredate: req.body.hiredate
    }
    var data = EmployeeModel(mybodydata);
    //var data = UsersModel(req.body);
    data.save(function(err) {
        if (err) {

            res.render('add-employee', { message: 'Employee registered not successfully!' });
        } else {

            res.render('add-employee', { message: 'Employee registered successfully!' });
        }
    })
});

/* DELETE User BY ID */
router.get('/delete_employee/:id', function(req, res) {
    EmployeeModel.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('../display_employee');
        } else {
            res.redirect('../display_employee');
        }
    });
});


/* GET SINGLE User BY ID */
 router.get('/edit_employee/:id', function(req, res) {
    console.log(req.params.id);
    EmployeeModel.findById(req.params.id, function(err, employee) {
        if (err) {
            console.log(err);
        } else {
            console.log(employee);

            res.render('edit-employee', { employeeDetail: employee });
        }
    });
});

/* UPDATE User */
 router.post('/edit_employee/:id', function(req, res) {
    EmployeeModel.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {
            res.redirect('edit_employee/' + req.params.id);
        } else {
            res.redirect('../display_employee');
        }
    });
}); 



/////product

var ProductModel = require('../schema/products');
var Response = require('../response');



//List Table Data
router.get('/product', function(req, res) {
    res.render('productp');
         
});


//List Table Data
router.get('/display_product', function(req, res) {
    ProductModel.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.render('display-product', { products: products });
            console.log(products);
        }
    });
});


//Display Form 
router.get('/add_product', function(req, res, next) {
    res.render('add-product');
});


/* POST Data. */
router.post('/add_product', function(req, res, next) {
    console.log(req.body);

    const mybodydata = {
        productid: req.body.productid,
        productname: req.body.productname,
        productprice: req.body.productprice
        
    }
    var data = ProductModel(mybodydata);
    //var data = UsersModel(req.body);
    data.save(function(err) {
        if (err) {

            res.render('add-product', { message: 'product registered not successfully!' });
        } else {

            res.render('add-product', { message: 'product registered successfully!' });
        }
    })
});

/* DELETE User BY ID */
router.get('/delete_product/:id', function(req, res) {
    ProductModel.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('../display_product');
        } else {
            res.redirect('../display_product');
        }
    });
});


/* GET SINGLE User BY ID */
 router.get('/edit_product/:id', function(req, res) {
    console.log(req.params.id);
    ProductModel.findById(req.params.id, function(err, product) {
        if (err) {
            console.log(err);
        } else {
            console.log(product);

            res.render('edit-product', { productDetail: product });
        }
    });
});

/* UPDATE User */
 router.post('/edit_product/:id', function(req, res) {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {
            res.redirect('edit_product/' + req.params.id);
        } else {
            res.redirect('../display_product');
        }
    });
}); 




/////Customer

var CustomerModel = require('../schema/customer');
var Response = require('../response');



//List Table Data
router.get('/customer', function(req, res) {
    res.render('customerp');
         
});


//List Table Data
router.get('/display_customer', function(req, res) {
    CustomerModel.find(function(err, customers) {
        if (err) {
            console.log(err);
        } else {
            res.render('display-customer', { customers: customers });
            console.log(customers);
        }
    });
});


//Display Form 
router.get('/add_customer', function(req, res, next) {
    res.render('add-customer');
});


/* POST Data. */
router.post('/add_customer', function(req, res, next) {
    console.log(req.body);

    const mybodydata = {
        customerid: req.body.customerid,
        customername: req.body.customername,
        customercontact: req.body.customercontact
        
    }
    var data = CustomerModel(mybodydata);
    //var data = UsersModel(req.body);
    data.save(function(err) {
        if (err) {

            res.render('add-customer', { message: 'customer registered not successfully!' });
        } else {

            res.render('add-customer', { message: 'customer registered successfully!' });
        }
    })
});

/* DELETE User BY ID */
router.get('/delete_customer/:id', function(req, res) {
    CustomerModel.findByIdAndRemove(req.params.id, function(err, project) {
        if (err) {
            res.redirect('../display_customer');
        } else {
            res.redirect('../display_customer');
        }
    });
});


/* GET SINGLE User BY ID */
 router.get('/edit_customer/:id', function(req, res) {
    console.log(req.params.id);
    CustomerModel.findById(req.params.id, function(err, customer) {
        if (err) {
            console.log(err);
        } else {
            console.log(customer);

            res.render('edit-customer', { customerDetail: customer });
        }
    });
});

/* UPDATE User */
 router.post('/edit_customer/:id', function(req, res) {
    CustomerModel.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {
            res.redirect('edit_customer/' + req.params.id);
        } else {
            res.redirect('../display_customer');
        }
    });
}); 



module.exports = router;
