package employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import employee.entity.empReg;
import employee.repositry.empRepositry;

@Service
public class empService {

	@Autowired
	empRepositry empRep;
	
	public empReg add(empReg er) {
		return empRep.save(er);
	}
	
	
	public List<empReg> getAll() {
		return empRep.findAll();
	}
	
	public void delete(int id) {
		empRep.deleteById(id);
	}
	
	public empReg update(int id, empReg em) {
		if( empRep.existsById(id)){
			em.setId(id);
			return empRep.save(em);
		}
		return null;
	}
	
	public empReg getById(int id) {
		return empRep.findById(id).orElse(null);
	}
}
